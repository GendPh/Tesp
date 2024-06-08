import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { DogModel, DogCommentary } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserCommentary } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { AuthService } from '../../../Service/auth.service';
import { BreedCommentaryComponent } from '../breed-commentary/breed-commentary.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, BreedCommentaryComponent],
  templateUrl: './breed-info.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})

export class BreedInfoComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  user: User[] = [];
  // Flag to indicate if the dog information has been loaded
  dogLoaded: boolean = false;
  breed: DogModel | null = null; // Variable to hold the current breed information
  breedId: string = ''; // Variable to hold the breed id
  relatedBreeds: DogModel[] = []; // Array to hold the related breeds
  unit: string = 'metric';
  subs: Subscription | null = null;

  // Inject the ActivatedRoute and DogService
  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private authService: AuthService,
  ) {
    this.user = this.authService.user;
    this.route.params.subscribe(params => {
      // Get the id parameter from the route
      this.breedId = params['breedId'];
    }
    );
  }


  ngOnInit(): void {
    this.subs = this.dogService.GetDogById(this.breedId).subscribe({
      next: (breed) => {
        // Assign the retrieved breed to the breed variable
        this.breed = breed;
        // Set the dogLoaded flag to true
        this.dogLoaded = true;
      },
      error: () => {
        // Redirect to the error page

      }
    });
  }

  // Method to change the unit of measurement
  ChangeUnit(e: Event) {
    this.unit = (e.target as HTMLInputElement).value;
  }
}

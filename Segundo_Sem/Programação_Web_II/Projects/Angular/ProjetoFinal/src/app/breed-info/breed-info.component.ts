import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { DogModel, DogCommentary } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLogged } from '../../../Model/user.model';
import { AuthService } from '../../../Service/auth.service';
import { BreedCommentaryComponent } from '../breed-commentary/breed-commentary.component';
import { Subscription } from 'rxjs';
import { BreedRelatedComponent } from '../breed-related/breed-related.component';
import { UserService } from '../../../Service/user.service';

declare var lightbox: any;

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, BreedCommentaryComponent, BreedRelatedComponent],
  templateUrl: './breed-info.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})

export class BreedInfoComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  user: UserLogged[] = [];
  // Flag to indicate if the dog information has been loaded
  dogLoaded: boolean = false;
  dog: DogModel | null = null; // Variable to hold the current dog information
  dogId: string = ''; // Variable to hold the dog id
  dogLikes: number = 0;
  unit: string = 'metric';
  dogLikedByUser: boolean = false;
  subs: Subscription;

  // Inject the ActivatedRoute and DogService
  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private authService: AuthService,
    private userService: UserService,
  ) {
    this.user = this.authService.user;
  }

  ngOnInit(): void {
    // Initialize Lightbox 2
    lightbox.option({
      'resizeDuration': 150,
      'wrapAround': true
    });

    // Get the dog id from the route parameters
    this.subs = this.route.params.subscribe(
      params => {
        this.dogId = params['breedId'];
        // Get the dog information by id
        this.dogService.GetDogById(this.dogId).subscribe({
          next: (dogResponse) => {
            // Assign the dog information to the dog variable
            this.dog = dogResponse;
            this.dogLikes = dogResponse.likes != undefined ? dogResponse.likes.length : 0;
            this.dogLoaded = true;
            this.userService.UserAlreadyLikedDog(this.user[0].id, this.dogId).subscribe({
              next: (liked) => {
                this.dogLikedByUser = liked;
              }
            });
          },
          error: () => {
            // Redirect to the error page
          }
        });
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  // Method to change the unit of measurement
  ChangeUnit(e: Event) {
    this.unit = (e.target as HTMLInputElement).value;
  }
  

  DogLikeMethod(e: Event) {
    const isChecked = (e.target as HTMLInputElement).checked;
    if (isChecked) {
      this.dogService.PatchAddUserLike(this.dogId, this.user[0].id).subscribe(
        {
          next: (dogResponse) => {
            this.dogLikes = dogResponse.likes.length;
            this.userService.PatchAddDogLike(this.dogId, this.user[0].id).subscribe(
              {
                error(error) {
                  console.log(error);
                },
              }
            );
          }
        }
      );
    } else {
      this.dogService.PatchRemoveUserLike(this.dogId, this.user[0].id).subscribe(
        {
          next: (dogResponse) => {
            // if dogResponse.likes is undefined, set dogLikes to 0, otherwise set it to the length of the likes array
            this.dogLikes = this.dogLikes = dogResponse.likes != undefined ? dogResponse.likes.length : 0;
            // Remove the like from the user
            this.userService.PatchRemoveDogLike(this.dogId, this.user[0].id).subscribe(
              {
                error(error) {
                  console.log(error);
                },
              }
            );
          }
        }
      );
    }
  }
}

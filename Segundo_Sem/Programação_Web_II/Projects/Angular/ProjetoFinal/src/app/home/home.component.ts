import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DogModel } from '../../../Model/dog.model';
import { DogService } from '../../../Service/dog.service';
import { CommonModule } from '@angular/common';
import { routeAnimationTrigger } from '../../../shared/Animations';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../Service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimationTrigger],
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  dogsBreeds: DogModel[] = [];
  dogsCommentaries: DogModel[] = [];
  subsDog: Subscription | null = null;
  subsComments: Subscription | null = null;

  constructor(private dogService: DogService, private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.IsUserLogged();
    this.LoadDogs();
    this.LoadCommentaries();
  }
  
  ngOnDestroy(): void {
    this.subsDog?.unsubscribe();
    this.subsComments?.unsubscribe();
  }

  LoadDogs() {
    this.subsDog = this.dogService.GetFourFirstDogs().subscribe({
      next: (dogs) => {
        this.dogsBreeds = dogs;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  LoadCommentaries() {
    this.subsComments = this.dogService.GetDogsWithCommentaries().subscribe({
      next: (dogs) => {
        this.dogsCommentaries = dogs;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

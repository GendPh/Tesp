import { Component, HostBinding, OnInit } from '@angular/core';
import { DogModel } from '../../../Model/dog.model';
import { DogService } from '../../../Service/dog.service';
import { CommonModule } from '@angular/common';
import { routeAnimationTrigger } from '../../../shared/Animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimationTrigger],
})
export class HomeComponent implements OnInit {
  dogsBreeds: DogModel[] = [];
  dogsCommentaries: DogModel[] = [];
  heroDogImage: string = "";
  constructor(private dogService: DogService) { }

  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  ngOnInit(): void {
    this.LoadDogs();
    this.LoadCommentaries();
  }

  LoadDogs() {
    this.dogService.GetAllDogs().subscribe({
      next: (dogs) => {
        this.dogsBreeds = dogs.slice(0, 4);
        this.heroDogImage = this.dogsBreeds[Math.floor(Math.random() * this.dogsBreeds.length)].image.url;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  LoadCommentaries() {
    this.dogService.GetAllCommentaries().subscribe({
      next: (commentaries) => {
        this.dogsCommentaries = commentaries.slice(0, 6);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }


}

import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { DogModel, DogCommentary } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './breed-info.component.html',
  animations: [routeAnimationTrigger],
})

export class BreedInfoComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
  ) { }

  breed: DogModel | null = null;
  relatedBreeds: DogModel[] = [];
  commentaries: DogCommentary[] = [];
  slicedCommentaries: DogCommentary[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Reset relatedBreeds array
      this.relatedBreeds = [];

      this.dogService.GetDogById(params["breedId"]).subscribe({
        next: (breed) => {
          this.breed = breed;

          if (this.breed.relatedIds) {
            this.breed.relatedIds.forEach(dog => {
              this.dogService.GetDogById(dog).subscribe({
                next: (breed) => {
                  this.relatedBreeds.push(breed);
                },
                error: (error) => {
                  console.error(error);
                }
              })
            });
          }

          this.LoadCommentary();
        },
        error: (error) => {
          console.error(error);
        }
      })
    })
  }

  LoadCommentary() {
    this.dogService.GetCommentariesById(this.breed.id).subscribe({
      next: (response) => {
        this.commentaries = response;
        this.slicedCommentaries = [...this.commentaries].slice(-5);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  AddCommentary(): void {
    const commentary: DogCommentary = {
      "userName": "user1",
      "comment": "testing"
    };

    const commentaries: DogCommentary[] = [...this.commentaries, commentary];

    this.dogService.patchCommentaries(this.breed.id, commentaries).subscribe({
      next: (_) => {
        this.LoadCommentary();
      },
      error: error => {
        console.error('Error adding commentary:', error);
      }
    });
  }
}

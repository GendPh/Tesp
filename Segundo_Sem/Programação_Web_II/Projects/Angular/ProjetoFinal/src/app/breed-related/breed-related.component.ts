import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DogModel } from '../../../Model/dog.model';
import { DogService } from '../../../Service/dog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breed-related',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breed-related.component.html',
  styles: ``
})
export class BreedRelatedComponent implements OnInit {
  relatedDogsId: number[] = [];
  relatedDogs: DogModel[] = [];
  errorRelatedDogs: boolean = false;
  errorMessage: string = '';

  constructor(
    private dogService: DogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        // Initialize the related dogs array to an empty array
        this.relatedDogs = [];

        // Get the related dogs for the specified breed id
        this.dogService.GetRelatedDogs(params['breedId']).subscribe(
          {
            next: (dogs) => {
              // If there are related dogs, get the dogs from the API
              if (dogs.length != 0) {
                this.dogService.GetDogFromRelated(dogs).subscribe(
                  {
                    next: (relatedDogs) => {
                      // Assign the retrieved related dogs to the relatedDogs array
                      this.relatedDogs = relatedDogs;
                    },
                    error: () => {
                      // Set the error flag to true if there is an error
                      this.errorRelatedDogs = true;
                      this.errorMessage = 'Error loading related dogs';
                    }
                  }
                )
              }
            },
            error: () => {
              // Set the error flag to true if there is an error
              this.errorRelatedDogs = true;
              this.errorMessage = 'Error getting dog related data';
            }
          }
        )
      },);
  }
}

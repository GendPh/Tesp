import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { DogModel } from '../../../Model/dog.model';
import { DogService } from '../../../Service/dog.service';
import { Subscription } from 'rxjs';
import { BreedsContainerComponent } from '../breeds-container/breeds-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [BreedsContainerComponent, CommonModule,],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent implements OnInit, OnDestroy {

  searchBreed: string = '';
  breedsFound: DogModel[] = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private dogService: DogService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchBreed = params['search'];
      this.fetchBreeds();
    });
  }

  fetchBreeds(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.dogService.SearchedDogs(this.searchBreed)
      .subscribe({
        next: (breeds) => {
          this.breedsFound = breeds;
        },
        error: (error) => {
          this.breedsFound = [];
          console.log(error);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

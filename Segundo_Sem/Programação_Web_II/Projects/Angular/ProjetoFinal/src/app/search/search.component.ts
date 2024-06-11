import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { DogResponse } from '../../../Model/dog.model';
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

  subscription: Subscription;
  searchBreed: string = '';
  searchPage: number = 1;
  dogsInfo: DogResponse;
  searchLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService) { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.searchLoaded = false;
      this.searchBreed = params['dog'];
      this.searchPage = params['page'];

      if (isNaN(this.searchPage) || this.searchPage < 1) {
        this.router.navigate(['/search'], { queryParams: { dog: this.searchBreed, page: '1' } });
      }
      this.fetchBreeds();
    });
  }

  fetchBreeds(): void {
    this.dogService.SearchedDogs(this.searchPage, this.searchBreed)
      .subscribe({
        next: (dogsResponse) => {
          console.log(dogsResponse);
          if (dogsResponse.total_pages < this.searchPage && dogsResponse.total_pages > 0) {
            this.router.navigate(['/search'], { queryParams: { dog: this.searchBreed, page: dogsResponse.total_pages } });
            return;
          }

          this.dogsInfo = dogsResponse.dogs.length > 0 ? dogsResponse : { dogs: [], page: 1, total_pages: 0 };
        },
        error: () => {
          this.dogsInfo = { dogs: [], page: 1, total_pages: 0 };
        },
        complete: () => {
          this.searchLoaded = true;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

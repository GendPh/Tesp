import { Component, ElementRef, HostBinding, OnInit, ViewChild, } from '@angular/core';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogModel, DogResponse } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { User, UserLogged } from '../../../Model/user.model';
import { AuthService } from '../../../Service/auth.service';
import { BreedsContainerComponent } from '../breeds-container/breeds-container.component';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink, BreedsContainerComponent],
  templateUrl: './breeds.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})
export class BreedsComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @ViewChild('paginationButtons') paginationButtons: ElementRef;

  dogPage: number = 1;
  dogsInfo: DogResponse;
  dogLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
  ) { }

  // Method to initialize the component
  ngOnInit(): void {
    // Subscribe to the route parameters
    this.route.queryParams.subscribe((params => {
      // Get the pageId from the route parameters
      this.dogPage = params["page"];
      // If the pageId is not a number, redirect to the first page
      if (isNaN(this.dogPage) || this.dogPage < 1) {
        this.router.navigate(['/breeds'], { queryParams: { page: '1' } });
        return;
      }

      // Get the dogs for the current page
      this.dogService.GetDogPage(this.dogPage).subscribe(
        {
          next: (dogs) => {

            if (dogs.total_pages < this.dogPage) {
              this.router.navigate(['/breeds'], { queryParams: { page: dogs.total_pages } });
              return;
            }

            this.dogsInfo = dogs;
            this.dogLoaded = true;
          },
          error: (error) => {
            console.log(error);
          }
        });
    }));
  }
}

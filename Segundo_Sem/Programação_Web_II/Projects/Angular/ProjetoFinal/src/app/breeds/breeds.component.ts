import { Component, ElementRef, HostBinding, OnInit, ViewChild, } from '@angular/core';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogModel } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { User } from '../../../Model/user.model';
import { AuthService } from '../../../Service/auth.service';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './breeds.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})
export class BreedsComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @ViewChild('paginationButtons') paginationButtons: ElementRef;

  user: User[] = [];

  dogPage: number = 1;
  dogsTotalPages: number = 1;
  dogs: DogModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private authService: AuthService,
  ) {
    this.user = this.authService.user;
  }

  // Method to initialize the component
  ngOnInit(): void {
    // Subscribe to the route parameters
    this.route.params.subscribe((params => {
      // Get the pageId from the route parameters
      this.dogPage = params["pageId"];

      // If the pageId is not a number, redirect to the first page
      if (isNaN(this.dogPage) || this.dogPage < 1 || this.dogPage > this.dogsTotalPages) {
        this.router.navigate(['/breeds/page', 1]);
        return;
      }

      // Get the dogs for the current page
      this.dogService.GetDogPage(this.dogPage).subscribe(
        {
          next: (dogs) => {
            this.dogs = dogs.dogs;
            this.dogsTotalPages = dogs.totalPages;
          },
          error: (error) => {
            console.log(error);
          }
        });
    }));
  }

  // Method to get an array of page numbers
  getPageNumbers(): number[] {
    // Return an array of page numbers from 1 to dogsTotalPages
    return Array(this.dogsTotalPages).fill(0).map((x, i) => i + 1);
  }

  // Method to go to previous page
  GoToPreviousPage(): void {
    // If the current page is the first page, return
    if (this.dogPage <= 1) return;
    // Navigate to the previous page
    this.router.navigate(['/breeds/page', Number(this.dogPage) - 1]);
    // Scroll to the previous page button
    this.scrollToButton(Number(this.dogPage) - 1);
  }

  // Method to go to next page
  GoToNextPage(): void {
    // If the current page is the last page, return
    if (this.dogPage >= this.dogsTotalPages) return;
    // Navigate to the next page
    this.router.navigate(['/breeds/page', Number(this.dogPage) + 1]);
    // Scroll to the next page button
    this.scrollToButton(Number(this.dogPage) + 1);
  }

  // Function scrollToButton: Scrolls the pagination buttons container to display the button corresponding to the given pageNumber.
  scrollToButton(pageNumber: number) {
    // Get all pagination buttons within the container
    const buttons = this.paginationButtons.nativeElement.querySelectorAll('.button');
    // Get the button corresponding to the pageNumber (assuming pageNumber starts from 1)
    const button = buttons[pageNumber - 1];
    // Get the width of the container holding pagination buttons
    const containerWidth = this.paginationButtons.nativeElement.clientWidth;
    // Get the width of the button
    const buttonWidth = button.offsetWidth;
    // Get the offset position of the button within its container
    const buttonLeft = button.offsetLeft;
    // Calculate the scroll position to make the button fully visible in the container
    let scrollLeft = buttonLeft - (containerWidth - buttonWidth);
    // Set the scroll position of the container to display the button
    this.paginationButtons.nativeElement.scrollLeft = scrollLeft;
  }


}

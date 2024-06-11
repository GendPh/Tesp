import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DogModel, DogResponse } from '../../../Model/dog.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fadeInTrigger } from '../../../shared/Animations';

@Component({
  selector: 'app-breeds-container',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './breeds-container.component.html',
  animations: [fadeInTrigger],
})
export class BreedsContainerComponent {
  @ViewChild('paginationButtons') paginationButtons: ElementRef;

  @Input('GetSearch') searchBreed: string = '';
  @Input('GetDogsResponse') dogsInfo: DogResponse;
  @Input('GetPath') path: string = 'breeds';

  constructor(
    private router: Router,
  ) { }


  // Method to get an array of page numbers
  getPageNumbers(): number[] {
    // Return an array of page numbers from 1 to dogsTotalPages
    return Array(this.dogsInfo.total_pages).fill(0).map((_, i) => i + 1);
  }

  // Method to go to previous page
  GoToPreviousPage(): void {
    // If the current page is the first page, return
    if (this.dogsInfo.page <= 1) return;
    // Navigate to the previous page
    if (this.path === 'breeds') {
      this.router.navigate([`/${this.path}`], { queryParams: { page: Number(this.dogsInfo.page) - 1 } });
    } else {
      this.router.navigate([`/${this.path}`], { queryParams: { dog: this.searchBreed, page: Number(this.dogsInfo.page) - 1 } });
    }
    // Scroll to the previous page button
    this.scrollToButton(Number(this.dogsInfo.page) - 1);
  }

  // Method to go to next page
  GoToNextPage(): void {
    // If the current page is the last page, return
    if (this.dogsInfo.page >= this.dogsInfo.total_pages) return;
    // Navigate to the next page
    if (this.path === 'breeds') {
      this.router.navigate([`/${this.path}`], { queryParams: { page: Number(this.dogsInfo.page) + 1 } });
    } else {
      this.router.navigate([`/${this.path}`], { queryParams: { dog: this.searchBreed, page: Number(this.dogsInfo.page) + 1 } });
    }
    // Scroll to the next page button
    this.scrollToButton(Number(this.dogsInfo.page) + 1);
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

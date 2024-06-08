import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DogCommentary } from '../../../Model/dog.model';
import { DogService } from '../../../Service/dog.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { User, UserCommentary } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-breed-commentary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breed-commentary.component.html',
  styles: ``
})
export class BreedCommentaryComponent implements OnInit, OnDestroy {
  // Input properties to get the dog id and name
  @Input('GetDogId') dogId: string = '';
  @Input('GetDogName') dogName: string = 'Dog Name';
  @Input('GetUser') user: User[] = [];

  // Subscription to get the commentaries
  subs: Subscription | null = null;
  // Array to hold the commentaries
  dogCommentaries: DogCommentary[] = []
  // Status message for comments
  commentMessageStatus: string = '';
  // Flag to indicate if a comment is being sent
  sendingComment: boolean = false;

  // Inject the DogService
  constructor(
    private dogService: DogService,
    private userService: UserService,
  ) { }

  // Initialize the component and load the commentaries
  ngOnInit(): void {
    this.LoadComments();
  }

  // Unsubscribe from the subscription when the component is destroyed
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  LoadComments(): void {
    // Load the commentaries for the dog with the specified id
    this.subs = this.dogService.GetCommentariesById(this.dogId).subscribe({
      next: (commentaries) => {
        // Assign the retrieved commentaries to the dogCommentaries array
        this.dogCommentaries = commentaries;
      },
      error: () => {
        // Set the commentMessageStatus to an error message
        this.commentMessageStatus = 'Error as happen loading the commentaries. Please try again.';
      }
    });
  }

  // Method to add a commentary
  AddCommentary(): void {
    // Get the comment input element
    const commentElement = document.getElementById('comment') as HTMLInputElement;
    // Will be to contain the comment split into words
    let commentWords: string[] = [];

    //Checks if the comment element is null
    if (!commentElement) {
      // Set the commentMessageStatus to an error message
      this.commentMessageStatus = 'Unable to find comment element, please try again.';
      return;
    }

    // Split the comment into words
    commentWords = commentElement.value.split(' '); // Split the comment into words

    // Check if the comment is between 5 and 20 words
    if (commentWords.length < 5 || commentWords.length > 20) {
      // Set the commentMessageStatus to an error message
      this.commentMessageStatus = 'Comment must be between 5 and 20 words.';
      return;
    }

    this.sendingComment = true; // Set the sendingComment flag to true

    // Create a DogCommentary object
    const commentary: DogCommentary = {
      "userName": this.user[0].username,
      "comment": commentElement.value
    };

    const userCommentary: UserCommentary = {
      "dogId": this.dogId,
      "dogName": this.dogName,
      "comment": commentElement.value
    }

    // Clear the comment input element
    commentElement.value = '';

    // Add the new commentary to the commentaries array
    const commentaries: DogCommentary[] = [...this.dogCommentaries, commentary];
    const userCommentaries: UserCommentary[] = [...this.user[0].commentaries, userCommentary];

    // Send the updated commentaries to the server
    this.dogService.patchCommentaries(this.dogId, commentaries).subscribe({
      next: () => {
        this.commentMessageStatus = 'Comment added successfully.';
        // Reload the commentaries
        this.LoadComments();
        // Send the commentary to the user 
        this.userService.PatchCommentaries(this.user[0].id, userCommentaries).subscribe();

      },
      error: () => {
        // Set the commentMessageStatus to an error message
        this.commentMessageStatus = 'Error as happen adding this comment. Please try again.';
      }
    });
  }
}

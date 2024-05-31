import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { DogModel, DogCommentary } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserCommentary } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './breed-info.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})

export class BreedInfoComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  user: User[] = [];

  // Inject the ActivatedRoute and DogService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private userService: UserService,
  ) {
    this.user = this.userService.applicationUserArray;
  }

  breed: DogModel | null = null; // Variable to hold the current breed information
  relatedBreeds: DogModel[] = []; // Array to hold the related breeds
  commentaries: DogCommentary[] = []; // Array to hold the commentaries
  slicedCommentaries: DogCommentary[] = []; // Array to hold a subset of commentaries
  sendingComment: boolean = false; // Flag to indicate if a comment is being sent
  commentMessageStatus: string = ''; // Variable to hold the status message for comments
  unit: string = 'metric';


  ngOnInit(): void {

    if (this.user.length == 0) {
      this.router.navigate(['/access']);
      return;
    }

    this.route.params.subscribe((params) => {
      // Reset relatedBreeds array
      this.relatedBreeds = [];

      // Get the breed information based on the breedId parameter
      this.dogService.GetDogById(params["breedId"]).subscribe({
        next: (breed) => {
          // Assign the retrieved breed information to the breed variable
          this.breed = breed;

          // If there are relatedIds for the breed, retrieve the related breeds
          if (this.breed.relatedIds) {
            this.breed.relatedIds.forEach(dog => {
              this.dogService.GetDogById(dog).subscribe({
                next: (breed) => {
                  // Add the related breed to the relatedBreeds array
                  this.relatedBreeds.push(breed);
                },
                error: (error) => {
                  console.error(error);
                }
              })
            });
          }

          this.LoadCommentary(); // Load the commentaries for the breed
        },
        error: (error) => {
          console.error(error);
        }
      })
    })
  }

  // Method to load the commentaries for the breed
  LoadCommentary() {
    // Retrieve the commentaries for the breed
    this.dogService.GetCommentariesById(this.breed.id).subscribe({
      next: (response) => {
        // Assign the retrieved commentaries to the commentaries array
        this.commentaries = response;
        // Get the last 10 commentaries
        this.slicedCommentaries = [...this.commentaries].slice(-10);
      },
      error: (error) => {
        console.error(error);
      }
    })
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
      "dogId": this.breed.id,
      "dogName": this.breed.name,
      "comment": commentElement.value
    }

    // Clear the comment input element
    commentElement.value = '';

    // Add the new commentary to the commentaries array
    const commentaries: DogCommentary[] = [...this.commentaries, commentary];
    const userCommentaries: UserCommentary[] = [...this.user[0].commentaries, userCommentary];

    // Send the updated commentaries to the server
    this.dogService.patchCommentaries(this.breed.id, commentaries).subscribe({
      next: () => {
        this.commentMessageStatus = 'Comment added successfully.';
        // Reload the commentaries
        this.LoadCommentary();
        // Send the commentary to the user 
        this.userService.PatchCommentaries(this.user[0].id, userCommentaries).subscribe();

      },
      error: () => {
        // Set the commentMessageStatus to an error message
        this.commentMessageStatus = 'Error as happen adding this comment. Please try again.';
      }
    });
  }

  // Method to change the unit of measurement
  ChangeUnit(e: Event) {
    this.unit = (e.target as HTMLInputElement).value;
  }
}

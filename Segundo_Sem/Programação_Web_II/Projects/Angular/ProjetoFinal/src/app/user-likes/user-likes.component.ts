import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../Service/user.service';
import { DogService } from '../../../Service/dog.service';
import { DogModel } from '../../../Model/dog.model';
import { fadeInTrigger } from '../../../shared/Animations';

@Component({
  selector: 'app-user-likes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-likes.component.html',
  animations: [fadeInTrigger],
})
export class UserLikesComponent implements OnInit {
  @Input('GetUserId') userId: string = "";
  dogsLiked: DogModel[] = [];
  dogsLikedLoaded: boolean = false;
  dogsLikedSuccess: boolean = true;

  constructor(
    private userService: UserService,
    private dogService: DogService) { }

  ngOnInit(): void {
    this.userService.GetUserLikes(this.userId).subscribe({
      next: (likesResult) => {
        if (likesResult.length === 0) {
          this.dogsLikedLoaded = true;
          return;
        }

        this.dogService.GetDogsFromUserLikes(likesResult).subscribe({
          next: (dogsResponse) => {
            this.dogsLiked = dogsResponse;
          },
          error: () => {
            this.dogsLikedSuccess = false;
          },
          complete: () => {
            this.dogsLikedLoaded = true;
          }
        });
      },
      error: () => {
        this.dogsLikedLoaded = true;
        this.dogsLikedSuccess = false;
      }
    });
  }
}

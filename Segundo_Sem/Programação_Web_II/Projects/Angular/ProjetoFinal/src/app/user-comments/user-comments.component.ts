import { Component, Input, OnInit } from '@angular/core';
import { fadeInTrigger } from '../../../shared/Animations';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserCommentary } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { DogService } from '../../../Service/dog.service';

@Component({
  selector: 'app-user-comments',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-comments.component.html',
  animations: [fadeInTrigger],
})
export class UserCommentsComponent implements OnInit {
  @Input('GetUserId') userId: string = "";

  dogsComments: UserCommentary[] = [];
  dogsCommentLoaded: boolean = false;
  dogsCommentSuccess: boolean = true;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.GetUserCommentaries(this.userId).subscribe(
      {
        next: (commentsResult) => {
          this.dogsComments = commentsResult;
        },
        error: () => {
          this.dogsCommentSuccess = false;
        },
        complete: () => {
          this.dogsCommentLoaded = true;
        }
      }
    )
  }
}

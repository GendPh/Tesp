import { Component, HostBinding, } from '@angular/core';
import { fadeInTrigger, routeAnimationTrigger, } from '../../../shared/Animations';
import { UserCommentary, UserLogged, } from '../../../Model/user.model';
import { AuthService, } from '../../../Service/auth.service';
import { CommonModule, } from '@angular/common';
import { RouterLink, } from '@angular/router';
import { UserLikesComponent, } from '../user-likes/user-likes.component';
import { UserCommentsComponent, } from '../user-comments/user-comments.component';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule, RouterLink, UserLikesComponent, UserCommentsComponent],
  templateUrl: './user-account.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})
export class UserAccountComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  user: UserLogged[] = [];

  dogsComments: UserCommentary[] = [];
  dogsCommentLoaded: boolean = false;
  dogsCommentSuccess: boolean = true;

  constructor(
    private authService: AuthService,
  ) { this.user = this.authService.user; }
}

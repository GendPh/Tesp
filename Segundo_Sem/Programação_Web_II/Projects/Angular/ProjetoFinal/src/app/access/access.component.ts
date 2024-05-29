import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routeAnimationTrigger, } from '../../../shared/Animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './access.component.html',
  animations: [routeAnimationTrigger,],
})
export class AccessComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  accessContainer: string = 'login';

  user: User | null = null;

  constructor(
    // Inject the UserService and Router services
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  // Initialize the component by checking if the user exists
  ngOnInit(): void {
    // Verify if the user is already logged
    this.user = this.userService.VerifyAlreadyLoggedUser();

    // If the user is already logged, redirect to the home page
    if (this.user != null) {
      this.router.navigate(['/']);
      // Return to avoid the rest of the code to run
      return;
    }

    /* this.userService.CheckUser('user1', 'password').subscribe({
      next: (resultUser) => {
        if (resultUser) {
          this.user = this.userService.VerifyAlreadyLoggedUser();
          console.log(this.user)
        } else {
          console.log('User does not exist');
        }
        // Ensure this console.log runs after the asynchronous operation completes

      },
    }); */
  }

  ChangeContainer(container: string) {
    this.accessContainer = container;
  }

}

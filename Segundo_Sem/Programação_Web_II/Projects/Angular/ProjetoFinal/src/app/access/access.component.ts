import { Component, HostBinding, ViewChild } from '@angular/core';
import { User, UserLogged } from '../../../Model/user.model';
import { Router } from '@angular/router';
import { routeAnimationTrigger, } from '../../../shared/Animations';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../Service/auth.service';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './access.component.html',
  animations: [routeAnimationTrigger,],
})

export class AccessComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  // Get the form from the template
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('registerForm') registerForm: NgForm;

  // User array
  user: UserLogged[] = [];
  // Access container
  accessContainer: string = 'login';
  // Login form variables
  userNameLogin: string;
  passwordLogin: string;
  userLoginFound: boolean = true;
  // Register form variables
  userNameRegister: string;
  userNameTaken: boolean = false;
  passwordRegister: string;
  confirmPasswordRegister: string;
  validPass: boolean = true;
  validPassConfirm: boolean = true;

  // Inject the AuthService and Router services
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    // Get the user from the AuthService
    this.user = this.authService.user;
  }

  // Change the container to login or create
  ChangeContainer(container: string) {
    this.accessContainer = container;
  }

  // Login the user by calling the Login method from the AuthService
  LoginUser() {
    if (this.loginForm.invalid) {
      return;
    }


    this.authService.Login(this.userNameLogin, this.passwordLogin).subscribe({
      next: (response) => {
        // If the user exists, redirect to the home page
        if (response) {
          this.router.navigate(['/']);
          // Reset the form
          this.userLoginFound = true;
          this.loginForm.reset();
          return;
        } else {
          // If the user does not exist, display an error message
          this.userLoginFound = false;
        }
      },
      // If an error occurs, display an error message
      error: () => {
        this.userLoginFound = false;
      }
    });
  }

  // Create a new user by calling the CreateUser method from the AuthService
  CreateUser(): void {
    this.authService.CreateUser(this.userNameRegister, this.passwordRegister).subscribe({
      next: (response) => {
        // If the user is created, redirect to the home page
        if (response) {
          this.router.navigate(['/']);
          // Reset the form
          this.userNameTaken = false;
          this.registerForm.reset();
          return;
        } else {
          // If the username already exists, display an error message
          this.userNameTaken = true;
          return;
        }
      }
    });
  }

  // Check if the password is valid by comparing the password and the confirm password
  EqualsPasswords() {
    this.validPassConfirm = this.passwordRegister === this.confirmPasswordRegister;
  }
}

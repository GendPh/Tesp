import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { Router } from '@angular/router';
import { routeAnimationTrigger, } from '../../../shared/Animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule, FormsModule,],
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
  ) { this.user = this.userService.VerifyAlreadyLoggedUser(); }

  // Initialize the component by checking if the user exists
  ngOnInit(): void {
    // If the user is already logged, redirect to the home page
    if (this.user != null) {
      this.router.navigate(['/']);
      // Return to avoid the rest of the code to run
      return;
    }
  }

  ChangeContainer(container: string) {
    this.accessContainer = container;
  }

  LoginUser(e: Event) {
    // Get the form element
    const form = e.target as HTMLFormElement;
    const errorForm = document.getElementById('login-error-message') as HTMLElement;
    let errorMessage: string = "";
    // Create a FormData object from the form
    const formData = new FormData(form);

    // Retrieve individual input values
    const userName = formData.get('userName') as string;
    const password = formData.get('password') as string;

    // Check if the input values are empty
    if (userName == "" || password == "") {
      errorMessage = "Please fill in all the fields";
      errorForm.textContent = errorMessage;
      return;
    }
    // Call the CheckUser method from the UserService

    this.userService.GetUser(userName, password).subscribe(user => {
      // If the user is null, show an error message
      if (user == null) {
        errorMessage = "The username or password is incorrect";
        errorForm.textContent = errorMessage;
        return;
      }

      // If the user exists, redirect to the home page
      this.router.navigate(['/']);

      // Return to avoid the rest of the code to run
      errorMessage = "";
      errorForm.textContent = errorMessage;
      return;
    });
  }

  CreateUser(e: Event) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Get the form element
    const form = e.target as HTMLFormElement;
    const errorForm = document.getElementById('register-error-message') as HTMLElement;
    let errorMessage: string = "";
    // Create a FormData object from the form
    const formData = new FormData(form);

    // Retrieve individual input values
    const userName = formData.get('userNameRegister') as string;
    const password = formData.get('passwordRegister') as string;
    const passwordConfirm = formData.get('passwordRegisterConfirm') as string;

    // Check if the input values are empty
    if (userName == "" || password == "" || passwordConfirm == "") {
      errorMessage = "Please fill in all the fields";
      errorForm.textContent = errorMessage;
      return;
    }

    // Check if the passwords match
    if (password !== passwordConfirm) {
      errorMessage = "The passwords do not match";
      errorForm.textContent = errorMessage;
      return;
    }


// Check if the password is valid
if (!this.isValidPassword(password)) {
  errorMessage = "The password must be at least 8 characters long, contain at least one uppercase letter and one special character.";
  errorForm.textContent = errorMessage;
  return;
}


    // Call the CreateUser method from the UserService
    this.userService.PostUser(userName, password).subscribe(user => {

      if (user === null) {
        errorMessage = "Username is already taken";
        errorForm.textContent = errorMessage;
        return;
      }

      this.userService.GetUser(userName, password).subscribe(user => {
        // If the user exists, redirect to the home page
        this.router.navigate(['/']);

        // Return to avoid the rest of the code to run
        errorMessage = "";
        errorForm.textContent = errorMessage;
        return;
      });
      // Redirect to the home page

    });
  }

  isValidPassword(password: string): boolean {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasSpecialChar;
  }
}

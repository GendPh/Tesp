import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
  ) {
    this.user = this.userService.VerifyAlreadyLoggedUser();
  }

  // Initialize the component by checking if the user exists
  ngOnInit(): void {

    console.log('User:', this.user)

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
    this.userService.CheckUser(userName, password).subscribe(user => {
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


  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userApplication: User[] | null = null;

  constructor(
    private userService: UserService,
  ) {
    this.userApplication = this.userService.applicationUserArray;
  }
}

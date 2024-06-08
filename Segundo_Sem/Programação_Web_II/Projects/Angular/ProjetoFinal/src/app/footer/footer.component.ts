import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User, UserLogged } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';
import { AuthService } from '../../../Service/auth.service';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  user: UserLogged[] = [];

  constructor(
    private authService: AuthService,
  ) {
    this.user = this.authService.user;
  }
}

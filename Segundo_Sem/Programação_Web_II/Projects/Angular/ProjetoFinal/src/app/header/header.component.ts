import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../Service/user.service';
import { User } from '../../../Model/user.model';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userApplication: User[] = [];

  constructor(private userService: UserService,) { this.userApplication = this.userService.applicationUserArray; }


  ButtonToggleMobileNavBar() {
    const buttonToggleMobileNavBarEl = document.getElementById('toggle-nav');
    const mobileNavEl = document.getElementById('mobile-nav');


    if (buttonToggleMobileNavBarEl && mobileNavEl) {
      if (buttonToggleMobileNavBarEl.classList.contains('close')) {
        buttonToggleMobileNavBarEl.classList.replace('close', 'open');
        mobileNavEl.classList.add('open');
      } else {
        buttonToggleMobileNavBarEl.classList.replace('open', 'close');
        mobileNavEl.classList.remove('open');
      }
    }
  }
  CloseMobileNavBar() {
    const buttonToggleMobileNavBarEl = document.getElementById('toggle-nav');
    const mobileNavEl = document.getElementById('mobile-nav');

    if (buttonToggleMobileNavBarEl && mobileNavEl) {
      if (buttonToggleMobileNavBarEl.classList.contains('open')) {
        buttonToggleMobileNavBarEl.classList.replace('open', 'close');
        mobileNavEl.classList.remove('open');
      }
    }
  }
}

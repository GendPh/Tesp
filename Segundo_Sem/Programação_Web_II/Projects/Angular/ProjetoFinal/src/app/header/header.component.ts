import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../../Model/user.model';
import { AuthService } from '../../../Service/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: User[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

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

  SearchBreed(e: Event) {
    e.preventDefault();
    const searchForm = e.target as HTMLFormElement;
    const searchInput = searchForm.querySelector('input[type="text"]') as HTMLInputElement;

    if (searchInput) {
      if (searchInput.value.length == 0) {
        searchInput.focus();
        return;
      }

      this.router.navigate([`/breed/search/${searchInput.value}`]);
      searchInput.value = '';
    }
  }
}

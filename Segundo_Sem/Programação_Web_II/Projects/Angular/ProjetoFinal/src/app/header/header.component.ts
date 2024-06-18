import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserLogged } from '../../../Model/user.model';
import { AuthService } from '../../../Service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: UserLogged[] = [];

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
    let searchValue = '';

    if (searchInput) {
      searchValue = searchInput.value.trim();

      if (searchValue.length == 0) {
        searchInput.value = '';
        searchInput.focus();
        return;
      }

      this.CloseMobileNavBar();

      this.router.navigate(['/search'], { queryParams: { dog: searchValue, page: '1' } });
      searchInput.value = '';
    }
  }
}

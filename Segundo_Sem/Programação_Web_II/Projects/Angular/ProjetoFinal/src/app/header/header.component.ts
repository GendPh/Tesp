import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user: null = null;

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

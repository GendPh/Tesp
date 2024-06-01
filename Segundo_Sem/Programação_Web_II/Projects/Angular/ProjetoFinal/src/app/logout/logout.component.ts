import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Service/user.service';
import { AuthService } from '../../../Service/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styles: ``
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.Logout();
  }

}

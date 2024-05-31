import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styles: ``
})
export class LogoutComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    //Call the LogoutUser method from the UserService
    this.userService.LogoutUser();
  }

}

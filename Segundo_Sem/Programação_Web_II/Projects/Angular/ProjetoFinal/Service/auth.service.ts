import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User, UserCreate, UserLogged } from "../Model/user.model";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  user: UserLogged[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // This method checks if the user exists and if the password is correct
  Login(userName: string, password: string): Observable<Boolean> {
    //1st find the user by username and password
    return this.http.get(`http://localhost:3000/users?username=${userName}&password=${password}`)
      .pipe(
        map((response: User[]) => {
          if (response.length == 0) {
            // User not found, return false
            return false;
          }
          
          const user: UserLogged = {
            name: response[0].username,
            id: response[0].id
          }

          if (localStorage.getItem('user') == null) {
            localStorage.setItem('user', JSON.stringify(user));
          }
          return true;
        })
      );
  }

  CreateUser(userName: string, password: string): Observable<Boolean> {
    //1st check if the username already exists
    return this.http.get(`http://localhost:3000/users?username=${userName}`)
      .pipe(
        map(
          (response: User[]) => {
            if (response.length != 0) {
              // Username already exists, return false
              return false;
            } else {
              // Username does not exist, create a new user
              let user: UserCreate = {
                "username": userName,
                "password": password,
                "likes": [],
                "commentaries": []
              };

              //2nd post the new user to the server
              this.http.post('http://localhost:3000/users', user).subscribe(
                {
                  next: (response: User) => {
                    //3rd set the user property to the user created and return true without the password
                    const user: UserLogged = {
                      name: response.username,
                      id: response.id
                    }

                    if (localStorage.getItem('user') == null) {
                      localStorage.setItem('user', JSON.stringify(user));
                      this.user.push(user);
                    }
                  }
                }
              );

              return true;
            }
          })
      );
  }

  // This method logs out the user
  Logout() {
    this.user.pop();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    return;
  }

  // This method checks if the user is logged
  IsUserLogged(): boolean {
    if (localStorage.getItem('user') != null && this.user.length == 0) {
      this.user.push(JSON.parse(localStorage.getItem('user')));
    }

    return localStorage.getItem('user') == null ? false : true;
  }
}
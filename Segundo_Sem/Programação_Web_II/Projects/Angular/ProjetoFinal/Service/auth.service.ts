import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User, UserCreate } from "../Model/user.model";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  user: User[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  // This method checks if the user exists and if the password is correct
  Login(userName: string, password: string): Observable<Boolean> {
    //1st find the user by username and password
    return this.http.get(`http://localhost:3000/users?username=${userName}`)
      .pipe(
        map((response: User[]) => {
          //2nd check if the user exists, if not return false
          if (response.length != 0 && response[0].password == password) {
            //3rd set the user property to the user found and return true without the password
            response[0].password = '';
            this.user.push(response[0]);
            return true;
          } else {
            return false;
          }
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
                    response.password = '';
                    this.user.push(response);
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
    this.router.navigate(['/']);
    return;
  }

  // This method checks if the user is logged
  IsUserLogged(): boolean {
    return this.user.length == 0 ? false : true;
  }
}
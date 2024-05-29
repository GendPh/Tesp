import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogService } from "./dog.service";
import { Observable, map } from "rxjs";
import { User } from "../Model/user.model";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  applicationUser: User | null = null;


  //This method gets an array of users from the server
  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  //This method checks if the user exists and if the password is correct
  CheckUser(username: string, password: string): Observable<User | null> {
    return this.GetUsers().pipe(
      map(users => {
        //1st find the user by username
        let user = users.find(user => user.username === username);

        //2nd check if the user exists, if not return null
        if (user == null) {
          return null;
        }

        //3rd check if the password is correct, if not return null
        if (user.password !== password) {
          return null;
        }

        //4th set the applicationUser property to the user found and return it without the password
        this.applicationUser = { ...user, password: '' };

        return this.applicationUser;
      })
    );
  }

  VerifyAlreadyLoggedUser(): User | null {
    return this.applicationUser;
  }
}
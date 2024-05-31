import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { User, UserCommentary, UserCreate } from "../Model/user.model";


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private route: Router,
  ) { }

  applicationUser: User | null = null;
  applicationUserArray: User[] = [];

  //This method gets an array of users from the server
  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  //This method checks if the user exists and if the password is correct
  GetUser(username: string, password: string): Observable<User | null> {
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
        this.applicationUserArray.push(this.applicationUser);
        return this.applicationUser;
      })
    );
  }

  // This method creates a new user
  PostUser(userName: string, password: string): Observable<User | null> {
    //1st check if the username already exists
    return this.FindUserByName(userName).pipe(
      switchMap(result => {
        if (result) {
          // Username already exists, return null
          return of(null);
        } else {
          // Username does not exist, create a new user
          let user: UserCreate = {
            username: userName,
            password: password,
            commentaries: [],
            likes: [],
          };
          return this.http.post<User>('http://localhost:3000/users', user);
        }
      })
    );
  }

  //This method finds a user by username
  FindUserByName(username: string): Observable<boolean> {
    return this.GetUsers().pipe(
      map(users => {
        //1st find the user by username
        let user = users.find(user => user.username === username);

        //2nd check if the user exists, if not return null
        if (user == null) {
          return false;
        }

        return true;
      })
    );
  }

  //This method checks if the user is already logged in
  VerifyAlreadyLoggedUser(): User | null {
    return this.applicationUser;
  }

  //This method logs out the user
  LogoutUser(): void {
    //Set the applicationUser property to null 
    //and the applicationUserArray to an empty array
    this.applicationUser = null;
    this.applicationUserArray.pop();
    this.route.navigate(['/']);
  }

  PatchCommentaries(userId: string, commentaries: UserCommentary[]): Observable<User> {
    const url = `http://localhost:3000/users/${userId}`;
    return this.http.patch<User>(url, { commentaries });
  }
}
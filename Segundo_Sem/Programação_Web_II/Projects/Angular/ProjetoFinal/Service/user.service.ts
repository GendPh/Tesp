import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { User, UserCommentary, UserCreate } from "../Model/user.model";


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  PatchCommentaries(userId: string, commentaries: UserCommentary[]): Observable<User> {
    const url = `http://localhost:3000/users/${userId}`;
    return this.http.patch<User>(url, { commentaries });
  }
}
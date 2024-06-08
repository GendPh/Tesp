import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { User, UserCommentary, UserCreate } from "../Model/user.model";


@Injectable()
export class UserService {

  private userUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
  ) { }

  GetUserCommentaries(userId: string): Observable<UserCommentary[]> {
    const url = `${this.userUrl}/${userId}`;
    return this.http.get<User>(url).pipe(
      map(user => user.commentaries as UserCommentary[])
    );
  }

  PatchCommentaries(userId: string, commentaries: UserCommentary[]): Observable<User> {
    const url = `${this.userUrl}/${userId}`;
    return this.http.patch<User>(url, { commentaries });
  }
}
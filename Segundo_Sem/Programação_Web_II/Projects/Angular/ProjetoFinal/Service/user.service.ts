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

  GetUserLikes(userId: string): Observable<string[]> {
    const url = `${this.userUrl}/${userId}`;
    return this.http.get<User>(url).pipe(
      map(user => user.likes || [])
    );
  }

  PatchCommentaries(userId: string, commentaries: UserCommentary[]): Observable<User> {
    const url = `${this.userUrl}/${userId}`;
    return this.http.patch<User>(url, { commentaries });
  }

  UserAlreadyLikedDog(userId: string, dogId: string): Observable<boolean> {
    const url = `${this.userUrl}/${userId}`;
    return this.http.get<User>(url).pipe(
      map(user => (user.likes || []).includes(dogId))
    );
  }

  PatchAddDogLike(dogId: string, userId: string): Observable<User> {
    const url = `${this.userUrl}/${userId}`;

    return this.http.get<User>(url).pipe(
      switchMap(user => {
        const updatedLikes = [...(user.likes || []), dogId];
        return this.http.patch<User>(url, { likes: updatedLikes });
      })
    );
  }
  PatchRemoveDogLike(dogId: string, userId: string): Observable<User> {
    const url = `${this.userUrl}/${userId}`;

    return this.http.get<User>(url).pipe(
      switchMap(user => {
        const updatedLikes = (user.likes || []).filter(id => id !== dogId);
        return this.http.patch<User>(url, { likes: updatedLikes });
      })
    );
  }
}
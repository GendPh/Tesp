import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogCommentary, DogModel } from "../Model/dog.model";
import { Observable, map } from 'rxjs';

@Injectable()
export class DogService {

  private dogUrlApi = 'http://localhost:3000/dogs';

  constructor(
    private http: HttpClient,
  ) { }

  GetAllDogs(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>('http://localhost:3000/dogs');
  }

  GetDogPage(page: number): Observable<{ dogs: DogModel[], page: number, totalPages: number }> {
    return this.http.get<DogModel[]>(this.dogUrlApi).pipe(
      map(dogs => {
        const dogsPerPage = 14;
        const start = (page - 1) * dogsPerPage;
        const dogsArray = dogs.slice(start, start + dogsPerPage);

        return {
          dogs: dogsArray,
          page: page,
          totalPages: Math.ceil(dogs.length / 14)
        };
      })
    );
  }


  GetDogById(id: number): Observable<DogModel> {
    return this.http.get<DogModel>(`${this.dogUrlApi}/${id}`);
  }

  GetAllCommentaries(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(this.dogUrlApi).pipe(
      map(dogs => dogs.filter(dog => dog.commentaries && dog.commentaries.length > 0))
    );
  }

  GetCommentariesById(id: string): Observable<DogCommentary[]> {
    return this.http.get(`${this.dogUrlApi}/${id}`).pipe(
      map(dog => {

        const commentariesArray: DogCommentary[] = [];

        const dogCommentaries = dog['commentaries'];

        for (let i = 0; i < dogCommentaries.length; i++) {
          commentariesArray.push(dogCommentaries[i]);
        }

        return commentariesArray;
      }
      )
    );
  }

  patchCommentaries(dogId: string, commentaries: DogCommentary[]) {
    const url = `http://localhost:3000/dogs/${dogId}`;
    return this.http.patch(url, { commentaries });
  }

  SearchedDogs(search: string): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(`${this.dogUrlApi}`)
      .pipe(
        map(dogs => dogs.filter(dog => dog.name.toLowerCase().includes(search.toLowerCase())))
      );
  }
}
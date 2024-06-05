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

  GetDogPage(page: number): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(`${this.dogUrlApi}?_page=${page}&_limit=14`);
  }

  // Method to get the total number of pages
  GetTotalPages(): Observable<number> {
    // Get all the dogs from the API and calculate the total number of pages
    return this.http.get<DogModel[]>(this.dogUrlApi).pipe(
      map(dogs => {
        // Return the total number of pages needed to display all the dogs
        return Math.ceil(dogs.length / 14);
      })
    );
  }

  // Method to get a dog by its id
  GetDogById(id: number): Observable<DogModel> {
    return this.http.get<DogModel>(`${this.dogUrlApi}/${id}`);
  }

  // Method to get all the commentaries from the dog 
  GetAllCommentaries(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(this.dogUrlApi).pipe(
      map(dogs => dogs.filter(dog => dog.commentaries.length > 0))
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
    return this.http.get<DogModel[]>(`http://localhost:3000/dogs?name_like=${search}`);
  }

}
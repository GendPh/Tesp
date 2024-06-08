import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogCommentary, DogModel, DogResponse } from "../Model/dog.model";
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

  // Method to get a specific page of dogs
  GetDogPage(page: number): Observable<DogResponse> {
    // Number of items per page
    const limit = 10;

    // Make an HTTP GET request to the API with pagination parameters
    return this.http.get<DogModel[]>(`${this.dogUrlApi}?_page=${page}&_limit=${limit}`, { observe: 'response' })
      .pipe(
        // Use the map operator to transform the response
        map((response: HttpResponse<DogModel[]>) => {
          // Extract the total number of items from the response headers
          const totalItems = Number(response.headers.get('X-Total-Count'));
          // Calculate the total number of pages
          const totalPages = Math.ceil(totalItems / limit);

          // Return an object containing the dogs, current page, and total pages
          return {
            // Use an empty array if the response body is null
            dogs: response.body || [],
            // Current page number
            page: page,
            // Total number of pages
            total_pages: totalPages
          };
        })
      );
  }

  // Method to get a dog by its id
  GetDogById(id: string): Observable<DogModel> {
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

        dogCommentaries.forEach(comment => {
          commentariesArray.push(comment);
        });

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
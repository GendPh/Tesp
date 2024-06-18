import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogCommentary, DogModel, DogResponse } from "../Model/dog.model";
import { Observable, map, switchMap } from 'rxjs';

@Injectable()
export class DogService {

  private dogUrlApi = 'http://localhost:3000/dogs';

  constructor(
    private http: HttpClient,
  ) { }

  /* GetAllDogs(): Observable<DogModel[]> {
      return this.http.get<DogModel[]>('http://localhost:3000/dogs');
    } */

  GetFourFirstDogs(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>('http://localhost:3000/dogs?_limit=4');
  }

  // Method to get dogs with at least one commentary
  GetDogsWithCommentaries(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(this.dogUrlApi)
      .pipe(
        // Use the map operator to transform the response into an array of dogs with commentaries
        map(dogs => dogs.filter(dog => dog.commentaries && dog.commentaries.length > 0)),
        // Use the map operator to transform the response in only 6 dogs
        map(dogsWithCommentaries => dogsWithCommentaries.slice(0, 6))
      );
  }

  // Method to get a specific page of dogs
  GetDogPage(page: number): Observable<DogResponse> {
    // Number of items per page
    const limit = 14;

    // Make an HTTP GET request to the API with pagination parameters
    return this.http.get<DogModel[]>(`${this.dogUrlApi}?_page=${page}&_limit=${limit}`, { observe: 'response' })
      .pipe(
        // Use the map operator to transform the response
        map((response: HttpResponse<DogModel[]>) => {
          // Extract the total number of items from the response headers
          const totalItems = Number(response.headers.get('X-Total-Count'));
          console.log(totalItems)
          // Calculate the total number of pages
          const totalPages = Math.ceil(totalItems / limit);

          // Return an object containing the dogs, current page, and total pages
          return {
            dogs: response.body ?? [],
            page: page,
            total_pages: totalPages
          };
        })
      );
  }

  // Method to get a dog by its id
  GetDogById(id: string): Observable<DogModel> {
    return this.http.get<DogModel>(`${this.dogUrlApi}/${id}`);
  }

  GetDogsByIds(dogsIds: string[]): Observable<DogModel[]> {
    let params = new HttpParams();

    dogsIds.forEach(id => {
      params = params.append('id', id);
    });

    return this.http.get<DogModel[]>(this.dogUrlApi, { params });
  }

  GetRelatedDogs(dogId: string): Observable<number[]> {
    return this.http.get<DogModel>(`${this.dogUrlApi}/${dogId}`).pipe(
      map(dog => dog.relatedIds || [])
    );
  }

  GetDogFromRelated(relatedDogs: number[]): Observable<DogModel[]> {
    let params = new HttpParams();

    relatedDogs.forEach(id => {
      params = params.append('id', id);
    });

    return this.http.get<DogModel[]>(this.dogUrlApi, { params });
  }

  // Method to get all the commentaries from the dog 
  GetAllCommentaries(): Observable<DogModel[]> {
    return this.http.get<DogModel[]>(this.dogUrlApi).pipe(
      map(dogs => dogs.filter(dog => dog.commentaries.length > 0))
    );
  }


  // Method to get the commentaries by the dog id
  GetCommentariesById(id: string): Observable<DogCommentary[]> {
    return this.http.get<DogModel>(`${this.dogUrlApi}/${id}`).pipe(
      map((dog: DogModel) => dog.commentaries as DogCommentary[])
    );
  }

  // Method to add a commentary to the dog 
  patchCommentaries(dogId: string, commentaries: DogCommentary[]) {
    const url = `${this.dogUrlApi}/${dogId}`;
    return this.http.patch(url, { commentaries });
  }

  // Method to add a like to the dog by the user id
  PatchAddUserLike(dogId: string, userId: string): Observable<DogModel> {
    const url = `${this.dogUrlApi}/${dogId}`;
    return this.http.get<DogModel>(url).pipe(
      switchMap(dog => {
        const updatedLikes = [...(dog.likes || []), userId];
        return this.http.patch<DogModel>(url, { likes: updatedLikes });
      })
    );
  }

  // Method to remove a like from a dog by the user id
  PatchRemoveUserLike(dogId: string, userId: string): Observable<DogModel> {
    const url = `${this.dogUrlApi}/${dogId}`;
    return this.http.get<DogModel>(url).pipe(
      switchMap(dog => {
        const updatedLikes = (dog.likes || []).filter(id => id !== userId);
        return this.http.patch<DogModel>(url, { likes: updatedLikes });
      })
    );
  }

  // Method to get a specific page of dogs with a search query parameter
  SearchedDogs(page: number, search: string): Observable<DogResponse> {
    // Number of items per page
    const limit = 14;
    // Make an HTTP GET request to the API with pagination parameters
    return this.http.get<DogModel[]>(`${this.dogUrlApi}?name_like=${search}&_page=${page}&_limit=${limit}`, { observe: 'response' })
      .pipe(
        // Use the map operator to transform the response
        map((response: HttpResponse<DogModel[]>) => {
          // Extract the total number of items from the response headers
          const totalItems = Number(response.headers.get('X-Total-Count'));
          // Calculate the total number of pages
          const totalPages = Math.ceil(totalItems / limit);

          // Return an object containing the dogs, current page, and total pages
          return {
            dogs: response.body ?? [],
            page: page,
            total_pages: totalPages
          };
        })
      );
  }

}
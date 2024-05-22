import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription, interval } from 'rxjs';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Observer';

  private subs: Subscription | null = null;

  name: string = 'None';
  img: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    /* this.GetUser(1); */
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  GetUser(user: number): void {

    let queryParams: HttpParams = new HttpParams().set('param1', 'value1').set('param2', 'value2');

    this.http.get<any>(
      /* `https://reqres.in/api/users/${user}`, */
      'http://localhost:3000/posts'/* ,
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: queryParams,
      } */
    ).subscribe({
      next: (response) => {
        console.log(response)
        /* this.img = response.data.avatar;
        this.name = `${response.data.first_name} ${response.data.last_name}`; */
      },
      error: (err) => console.log(err),
    })

  }

  PostUser(): void {
    this.http.post<any>('http://localhost:3000/posts/',
      {
        "id": "1000",
        "title": "foo",
        "views": 1000
      }
    ).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err),
    })
  }

  RandomUser(): void {
    this.GetUser(Math.floor(Math.random() * 10) + 1);
  }
}
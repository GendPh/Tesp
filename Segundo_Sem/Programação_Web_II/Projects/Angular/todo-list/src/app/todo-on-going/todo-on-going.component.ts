import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-on-going',
  standalone: true,
  imports: [],
  templateUrl: './todo-on-going.component.html',
  styleUrl: './todo-on-going.component.css'
})
export class TodoOnGoingComponent {
  @Input("TodoOnGoing") todoOnGoing: Todo | undefined = undefined;
}

interface Todo {
  id: number;
  title: string;
  date_started: string;
  date_ended: string;
}
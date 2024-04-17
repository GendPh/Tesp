import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-on-going',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-on-going.component.html',
  styleUrl: './todo-on-going.component.css'
})
export class TodoOnGoingComponent {
  @Input("TodoOnGoing") todoOnGoing: Todo | undefined = undefined;
  @Input("TodoFinished") isTodoFinished: boolean = false;
}

interface Todo {
  id: number;
  title: string;
  date_started: string;
  date_ended: string;
}
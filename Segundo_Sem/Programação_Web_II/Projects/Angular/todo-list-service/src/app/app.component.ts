import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsertTodoComponent } from './insert-todo/insert-todo.component';
import { TodoOnGoingComponent } from './todo-on-going/todo-on-going.component';
import { CommonModule } from '@angular/common';
import { TodoCompleteButtonComponent } from './todo-complete-button/todo-complete-button.component';
import { TodoService } from './Service/todo.service';
import { Todo } from './Model/todo.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InsertTodoComponent, TodoOnGoingComponent, TodoCompleteButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoOngoing: Todo[] = [];
  todoCompleted: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todoOngoing = todoService.todoOnGoing;
    this.todoCompleted = todoService.todoCompleted;
  }

  containerOnGoing: boolean = true;

  ChangeTodoContainer() {
    this.containerOnGoing = !this.containerOnGoing;
  }

  ButtonContainerClass() {
    return this.containerOnGoing ? "open" : "close";
  }
}

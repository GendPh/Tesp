import { Component, } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { TodoService, } from '../Service/todo.service';

@Component({
  selector: 'app-insert-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-todo.component.html',
  styleUrl: './insert-todo.component.css'
})
export class InsertTodoComponent {
  constructor(private todoService: TodoService) { }

  todoTitle: string;

  Create() {
    if (this.todoTitle == null || this.todoTitle == "") return;
    this.todoService.TodoCreate(this.todoTitle);
    this.todoTitle = "";
  }
}
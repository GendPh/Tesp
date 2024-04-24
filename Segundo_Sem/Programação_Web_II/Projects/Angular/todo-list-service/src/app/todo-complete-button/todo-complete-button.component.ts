import { Component, Input } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-todo-complete-button',
  standalone: true,
  imports: [],
  templateUrl: './todo-complete-button.component.html',
  styleUrl: './todo-complete-button.component.css'
})
export class TodoCompleteButtonComponent {
  constructor(private todoService: TodoService) { }
  @Input("ReceiveTodoId") todoId: number = 0;

  CompleteTodo() {
    if (this.todoId === 0) return;
    this.todoService.TodoComplete(this.todoId);
  }
}

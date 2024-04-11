import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-complete-button',
  standalone: true,
  imports: [],
  templateUrl: './todo-complete-button.component.html',
  styleUrl: './todo-complete-button.component.css'
})
export class TodoCompleteButtonComponent {
  @Input("TodoId") todoCompleted: number = 0;
  @Output("TodoCompleted") emitTodo = new EventEmitter<number>();

  CompleteTodo() {
    if (this.todoCompleted === 0) return;
    this.emitTodo.emit(this.todoCompleted);
  }
}

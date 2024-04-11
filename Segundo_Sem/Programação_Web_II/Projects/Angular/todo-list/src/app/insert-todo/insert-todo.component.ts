import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-todo.component.html',
  styleUrl: './insert-todo.component.css'
})
export class InsertTodoComponent {
  todoTitle: string = "";

  @Output("TodoEmitted") emitTodo = new EventEmitter<string>();

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.todoTitle.trim() === "") return;

    this.emitTodo.emit(this.todoTitle);
    this.todoTitle = "";
  }
}
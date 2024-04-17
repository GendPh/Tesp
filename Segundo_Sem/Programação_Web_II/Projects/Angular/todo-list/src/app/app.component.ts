import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsertTodoComponent } from './insert-todo/insert-todo.component';
import { TodoOnGoingComponent } from './todo-on-going/todo-on-going.component';
import { CommonModule } from '@angular/common';
import { TodoCompleteButtonComponent } from './todo-complete-button/todo-complete-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InsertTodoComponent, TodoOnGoingComponent, TodoCompleteButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoOnGoing: Todo[] = [];
  todoCompleted: Todo[] = [];
  containerOnGoing: boolean = true;

  ReceiveTodoEmitted(todo: string) {
    const newTodo: Todo = {
      id: this.todoOnGoing.length === 0 ? 1 : this.todoOnGoing[this.todoOnGoing.length - 1].id + 1,
      title: todo,
      date_started: new Date().toLocaleString(),
      date_ended: ""
    };
    this.todoOnGoing.push(newTodo);
  }
  
  ReceiveTodoCompletedEmitted(todoId: number) {
    const todoIndex = this.todoOnGoing.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) return;

    const todo = this.todoOnGoing[todoIndex];
    todo.date_ended = new Date().toLocaleString();
    this.todoOnGoing.splice(todoIndex, 1);
    this.todoCompleted.push(todo);
  }

  ChangeTodoContainer() {
    this.containerOnGoing = !this.containerOnGoing;
  }
  ButtonContainerClass() {
    return this.containerOnGoing ? "open" : "close";
  }
}

interface Todo {
  id: number;
  title: string;
  date_started: string;
  date_ended: string;
}

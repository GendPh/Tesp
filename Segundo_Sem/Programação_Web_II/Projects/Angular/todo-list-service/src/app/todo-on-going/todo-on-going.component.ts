import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../Model/todo.model';
@Component({
  selector: 'app-todo-on-going',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-on-going.component.html',
  styleUrl: './todo-on-going.component.css'
})

export class TodoOnGoingComponent {
  @Input("ReceiveTodoInf") todoOnGoing: Todo;
}
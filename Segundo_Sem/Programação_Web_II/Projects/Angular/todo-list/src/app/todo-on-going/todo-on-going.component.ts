import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-on-going',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-on-going.component.html',
  styleUrl: './todo-on-going.component.css'
})
export class TodoOnGoingComponent implements OnInit, OnDestroy {

  @Input("TodoOnGoing") todoOnGoing: Todo | undefined = undefined;
  @Input("TodoFinished") isTodoFinished: boolean = false;

  ngOnInit(): void {
    console.log(`${this.todoOnGoing?.title} foi criada em ${this.todoOnGoing?.date_started}.`);
  }

  ngOnDestroy(): void {
    console.log(`${this.todoOnGoing?.title} foi completado em ${this.todoOnGoing?.date_ended}.`);

  }
}

interface Todo {
  id: number;
  title: string;
  date_started: string;
  date_ended: string;
}
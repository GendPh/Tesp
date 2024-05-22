import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../Service/task.service';
import { CommonModule } from '@angular/common';
import { TaskModel } from '../../../Model/task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  tasks: TaskModel[] = [];
  newTaskDesc: string = '';
  ngOnInit(): void {
    this.LoadTask();
  }

  PostTask(): void {
    if (this.newTaskDesc == '') return;
    
    this.taskService.PostTask(new TaskModel("0", this.newTaskDesc)).subscribe({
      next: (response) => { this.LoadTask() },
      error: (err) => console.log(err),
    })
    this.newTaskDesc = '';
  }
  DeleteTask(taskId: string): void {
    this.taskService.DeleteTask(taskId).subscribe({
      next: (response) => { this.LoadTask() },
      error: (err) => console.log(err),
    })
  }
  LoadTask(): void {
    this.taskService.GetTask().subscribe({
      next: (response) => { this.tasks = response; console.log(response) },
      error: (err) => console.log(err),
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../Services/logger.service';
import { StudentComponent } from '../student/student.component';
import { StudentService } from '../../Services/student.service';
import { Student } from '../../Model/student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula240424',
  standalone: true,
  imports: [CommonModule, StudentComponent],
  templateUrl: './aula240424.component.html',
  styleUrl: './aula240424.component.css',
  providers: [LoggerService],
})

export class Aula240424Component implements OnInit {
  students: Student[];

  constructor(
    private service: LoggerService,
    private studentsService: StudentService
  ) {
    this.students = this.studentsService.students;
  }

  ngOnInit(): void {
    console.log(this.students);
  }
}

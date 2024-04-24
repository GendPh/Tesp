import { Component, Input } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  constructor(private studentService: StudentService) { }
  @Input("ReceiveStudentInf") student: Student;

  RemoveStudent(): void {
    this.studentService.RemoveStudent(this.student.id);
  }
}

import { Student } from "../Model/student.model";

export class StudentService {
  students: Student[] = [
    { id: 1, name: 'Gabriel Ferreira' },
    { id: 2, name: 'João Silva' },
    { id: 3, name: 'Maria Sousa' },
    { id: 4, name: 'Jose Santos' },
  ];

  RemoveStudent(studentId: number): void {
    const index = this.students.findIndex(s => s.id === studentId);
    if (index === -1) return;
    this.students.splice(index, 1);
  }
}
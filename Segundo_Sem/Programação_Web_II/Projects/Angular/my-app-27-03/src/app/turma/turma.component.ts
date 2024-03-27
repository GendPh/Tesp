import { Component } from '@angular/core';
import { AlunoComponent } from '../aluno/aluno.component';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [AlunoComponent],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  alunos = [
    { name: "Gabriel", number: "a28581" },
    { name: "Jader", number: "a27473" }
  ];
}

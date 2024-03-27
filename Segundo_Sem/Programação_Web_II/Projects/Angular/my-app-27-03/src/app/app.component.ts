import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceitasComponent } from './receitas/receitas.component';
import { TurmaComponent } from './turma/turma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceitasComponent, TurmaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Aula 27/03/2024';
}

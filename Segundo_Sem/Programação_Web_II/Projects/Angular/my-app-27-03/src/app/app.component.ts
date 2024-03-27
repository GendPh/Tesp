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
  title: string = 'Aula 27/03/2024';
  n: number = 0;

  Add(n: number): void {
    this.n += n;
  }
  Reduce(n: number): void {
    this.n -= n;
  }
  Reset(): void {
    this.n = 0;
  }
  ChangeTitle(e: Event): void {
    this.title = (e.target as HTMLInputElement).value.length == 0 ? "Aula 27/03/2024" : (e.target as HTMLInputElement).value;
  }
}

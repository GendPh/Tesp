import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-03',
  standalone: true,
  imports: [],
  templateUrl: './aula-030424.component.html',
  styleUrl: './aula-030424.component.css'
})
export class Aula03Component {
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

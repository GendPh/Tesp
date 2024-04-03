import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aula-030424',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './aula-030424.component.html',
  styleUrl: './aula-030424.component.css'
})
export class Aula030424Component {
  title: string = "Aula 03/04/24";
  number1: number = 0;
  number2: number = 0;
  result1: number = 0;
  number3: number = 0;
  number4: number = 0;
  result2: number = 0;
  showP: boolean = false;

  ShowP(): void {
    this.showP = !this.showP;
  }

  Sum(): void {
    this.result1 = this.number1 + this.number2;
  }

  AutoSum(): void {
    this.result2 = this.number3 + this.number4;
  }

  ChangeTitle(e: Event): void {
    this.title = (e.target as HTMLInputElement).value.length == 0 ? "Aula 03/04/24" : (e.target as HTMLInputElement).value;
  }
}

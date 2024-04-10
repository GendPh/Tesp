import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { EmitnumberComponent } from './emitnumber/emitnumber.component';

@Component({
  selector: 'app-aula100424',
  standalone: true,
  imports: [CommonModule, FormsModule, ParagraphComponent, EmitnumberComponent],
  templateUrl: './aula100424.component.html',
  styleUrl: './aula100424.component.css'
})
export class Aula100424Component {
  words: string[] = [];
  word: string = '';
  numberReceived: number = 0;

  AddWord() {
    if (this.word.trim().length != 0) {
      this.words.push(this.word);
      this.word = '';
    }
    console.log(this.words)
  }
  RemoveWord() {
    this.words.pop();
    this.word = '';
  }

  handleRandomNumber(num: number) {
    this.numberReceived = num;
  }
}

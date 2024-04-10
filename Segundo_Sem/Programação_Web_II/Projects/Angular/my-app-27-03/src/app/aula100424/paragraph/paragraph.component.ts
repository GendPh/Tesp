import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphComponent {
  @Input("insertPalavra") word: string = "";

}

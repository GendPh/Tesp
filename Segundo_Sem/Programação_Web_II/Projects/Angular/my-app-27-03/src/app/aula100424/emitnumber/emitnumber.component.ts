import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitnumber',
  standalone: true,
  imports: [],
  templateUrl: './emitnumber.component.html',
  styleUrl: './emitnumber.component.css'
})
export class EmitnumberComponent {
  @Output("EmitNumberToParent") emitNumber: EventEmitter<number> = new EventEmitter();

  emitRandomNumber() {
    this.emitNumber.emit(Math.floor(Math.random() * 100));
  }
}

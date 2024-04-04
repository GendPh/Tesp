import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-exe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exe.component.html',
  styleUrl: './exe.component.css'
})
export class ExeComponent {
  lightOn: boolean = false;

  ToggleLightOn(): void {
    this.lightOn = !this.lightOn;
  }
  TurnOn() {
    return (this.lightOn) ? { backgroundColor: 'yellow' } : { backgroundColor: 'white' };
  }
}

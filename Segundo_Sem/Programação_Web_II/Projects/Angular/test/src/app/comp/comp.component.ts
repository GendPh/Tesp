import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input() parameter: string = "No Words";
}

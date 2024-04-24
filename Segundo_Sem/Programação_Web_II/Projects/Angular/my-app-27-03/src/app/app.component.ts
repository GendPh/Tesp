import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aula03Component } from './aula-03/aula-030424.component';
import { Aula030424Component } from './aula-030424/aula-030424.component';
import { Aula100424Component } from './aula100424/aula100424.component';
import { Aula240424Component } from './aula240424/aula240424.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Aula03Component, Aula030424Component, Aula100424Component, Aula240424Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}

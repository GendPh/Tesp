import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aula03Component } from './aula-03/aula-030424.component';
import { Aula030424Component } from './aula-030424/aula-030424.component';
import { Aula100424Component } from './aula100424/aula100424.component';
import { Aula240424Component } from './aula240424/aula240424.component';
import { Aula150424Component } from './aula15-04-24/aula15-04-24.component';
import { Aula220524Component } from './aula-220524/aula-220524.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Aula03Component, Aula030424Component, Aula100424Component, Aula240424Component, Aula150424Component, Aula220524Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DogModel } from '../../../Model/dog.model';
import { RouterLink } from '@angular/router';
import { fadeInTrigger } from '../../../shared/Animations';

@Component({
  selector: 'app-breeds-container',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './breeds-container.component.html',
  animations: [fadeInTrigger],
})
export class BreedsContainerComponent {
  @Input('GetBreedsArray') breeds: DogModel[] = [];
  @Input('GetBreedSearched') searchBreed: string = '';
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DogModel } from '../../../Model/dog.model';

@Component({
  selector: 'app-breed-related',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breed-related.component.html',
  styles: ``
})
export class BreedRelatedComponent {
  @Input('GetDogId') dogId: string = '';

  relatedBreeds: DogModel[] = [];

}

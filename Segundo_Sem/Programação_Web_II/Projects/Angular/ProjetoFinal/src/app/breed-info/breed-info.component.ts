import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';

@Component({
  selector: 'app-breed-info',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './breed-info.component.html',
  animations: [routeAnimationTrigger],
})
export class BreedInfoComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dogService: DogService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const breedName = params["breedId"];
      console.log(breedName);
      /* this.dogService.GetBreedByName(breedName).subscribe({
        next: (breed) => {
          console.log(breed);
        },
        error: (error) => {
          console.error(error);
        }
      }) */
    })
  }
}

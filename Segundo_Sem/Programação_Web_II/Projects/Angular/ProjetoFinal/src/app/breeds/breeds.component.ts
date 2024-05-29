import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { fadeInTrigger, routeAnimationTrigger } from '../../../shared/Animations';
import { DogService } from '../../../Service/dog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogModel } from '../../../Model/dog.model';
import { CommonModule } from '@angular/common';
import { User } from '../../../Model/user.model';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './breeds.component.html',
  animations: [routeAnimationTrigger, fadeInTrigger],
})
export class BreedsComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  user: User | null = null;

  breedPage: number = 1;
  breedTotalPages: number = 1;
  breedDogs: DogModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    //Verify if the user is already logged
    this.user = this.userService.VerifyAlreadyLoggedUser();
    //If the user is not logged, redirect to the access page
    if (this.user == null) {
      this.router.navigate(['/access']);
      //return to avoid the rest of the code to run
      return;
    }

    this.dogService.DivideDogsBreedsByPage().subscribe({
      next: (dogs) => {
        this.breedTotalPages = dogs.length;

        this.route.params.subscribe((params => {
          this.breedPage = params["pageId"];

          if (this.breedPage < 1 || this.breedPage > this.breedTotalPages) {
            this.breedPage = 1;
            this.router.navigate(['/breeds', 'page', this.breedPage]);
          }

          this.breedDogs = dogs[this.breedPage - 1];
        }))
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getPageNumbers(): number[] {
    return Array(this.breedTotalPages).fill(0).map((x, i) => i + 1);
  }

  GoToPreviousPage(): void {
    this.router.navigate(['/breeds', 'page', Number(this.breedPage) - 1]);
  }
  GoToNextPage(): void {
    this.router.navigate(['/breeds', 'page', Number(this.breedPage) + 1]);
  }


  ngOnDestroy(): void {
    /*  this.subs?.unsubscribe(); */
  }
}

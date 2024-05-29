import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { AccessComponent } from './access/access.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'breeds/page/:pageId', component: BreedsComponent, },
  { path: 'breed/:breedId', component: BreedInfoComponent, },
  { path: 'access', component: AccessComponent, },
  { path: "**", redirectTo: '', }
];

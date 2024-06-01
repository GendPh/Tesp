import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { AccessComponent } from './access/access.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard, authGuardAccess } from '../../Guard/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'breeds/page/:pageId', component: BreedsComponent, canActivate: [authGuard], },
  { path: 'breed/:breedId', component: BreedInfoComponent, canActivate: [authGuard], },
  { path: 'access', component: AccessComponent, canActivate: [authGuardAccess], },
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard], },
  { path: "**", redirectTo: '', }
];

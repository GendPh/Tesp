import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { AccessComponent } from './access/access.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard, authGuardAccess } from '../../Guard/auth.guard';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'breeds',
    /* canActivate: [authGuard], */
    children: [
      { path: 'page/:pageId', component: BreedsComponent, },
      { path: 'search/:search', component: SearchComponent, }
    ]
  },
  {
    path: 'breed', canActivate: [authGuard], children: [
      { path: ':breedId', component: BreedInfoComponent, },
    ]
  },
  { path: 'access', component: AccessComponent, canActivate: [authGuardAccess], },
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard], },
  { path: "**", redirectTo: '', }
];

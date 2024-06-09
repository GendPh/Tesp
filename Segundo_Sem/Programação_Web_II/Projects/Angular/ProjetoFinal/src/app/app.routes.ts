import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { AccessComponent } from './access/access.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard, authGuardAccess } from '../../Guard/auth.guard';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  // Route to home component
  { path: '', component: HomeComponent },

  // Route to breeds component divided to a page with all breeds separated with paginification and a page for search
  {
    path: 'breeds',
    canActivate: [authGuard],
    children: [
      { path: 'page/:pageId', component: BreedsComponent, },
      { path: 'search/:search/page/:pageId', component: SearchComponent, }
    ]
  },

  // Route to breed info component
  {
    path: 'breed', canActivate: [authGuard], children: [
      { path: ':breedId', component: BreedInfoComponent, },
    ]
  },

  // Route to access component
  { path: 'access', component: AccessComponent, canActivate: [authGuardAccess], },

  // Route to logout component
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard], },

  // Route to home component if the path is not found
  { path: "**", redirectTo: '', }
];

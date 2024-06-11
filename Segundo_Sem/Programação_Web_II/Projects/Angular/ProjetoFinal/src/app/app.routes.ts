import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedInfoComponent } from './breed-info/breed-info.component';
import { AccessComponent } from './access/access.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard, authGuardAccess } from '../../Guard/auth.guard';
import { SearchComponent } from './search/search.component';
import { UserAccountComponent } from './user-account/user-account.component';

export const routes: Routes = [
  // Route to home component
  {
    path: '',
    component: HomeComponent
  },
  // Route to breeds component divided to a page with all breeds separated with paginification and a page for search
  {
    path: 'breeds',
    canActivate: [authGuard],
    component: BreedsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [authGuard],
  },
  // Route to breed info component
  {
    path: 'breed/:breedId',
    component: BreedInfoComponent,
    canActivate: [authGuard],
  },
  // Route to access component
  {
    path: 'access',
    component: AccessComponent,
    canActivate: [authGuardAccess],
  },
  // Route to logout component
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },
  // Route to account component
  {
    path: 'account/:userId',
    component: UserAccountComponent,
    canActivate: [authGuard]
  },
  // Route to home component if the path is not found
  {
    path: "**",
    redirectTo: '',
  }
];

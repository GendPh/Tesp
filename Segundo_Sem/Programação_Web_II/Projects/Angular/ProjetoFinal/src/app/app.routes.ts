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
    component: HomeComponent,
    title: 'Home',
  },
  // Route to breeds component divided to a page with all breeds separated with paginification and a page for search
  {
    path: 'breeds',
    canActivate: [authGuard],
    component: BreedsComponent,
    title: 'Breeds',
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [authGuard],
    title: 'Search',
  },
  // Route to breed info component
  {
    path: 'breed/:breedId',
    component: BreedInfoComponent,
    canActivate: [authGuard],
    title: 'Breed Info',
  },
  // Route to access component
  {
    path: 'access',
    component: AccessComponent,
    canActivate: [authGuardAccess],
    title: 'Access',
  },
  // Route to logout component
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
    title: 'Logout',
  },
  // Route to account component
  {
    path: 'account',
    component: UserAccountComponent,
    canActivate: [authGuard],
    title: 'Account',
  },
  // Route to home component if the path is not found
  {
    path: "**",
    redirectTo: '',
  }
];

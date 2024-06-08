import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../Service/auth.service";
import { inject } from "@angular/core";

// This guard is used to prevent access to the pages that require the user to be logged in
export const authGuard: CanActivateFn = (route, state) => {
  // Inject the AuthService and Router
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);

  if (authService.IsUserLogged()) {
    return true;
  } else {
    router.navigate(['/access']);
    return false;
  }
}

// This guard is used to prevent access to the access page if the user is already logged in
export const authGuardAccess: CanActivateFn = (route, state) => {
  // Inject the AuthService and Router
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);

  if (!authService.IsUserLogged()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
}

import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    console.log('Logged ?: ' +this.hardcodedAuthenticationService.isUserLoggedIn())
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      {return true;}
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
 
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardService).canActivate(next, state);
}

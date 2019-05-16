import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { log } from 'util';
import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: RouterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //  return true;
    return this.authService.isUserAuthenticated(this.authService.getBearerToken).then((status) => {
      console.log(status);
      if (!status) {
        this.router.routeToLogin();
      }
      return status;
    });
  }
}

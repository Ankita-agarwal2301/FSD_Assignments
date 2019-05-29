import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';
import { log } from 'util';
import { RouterService } from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private rout: RouterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isUserAuthenticated(this.auth.getBearerToken()).then(status => {
      console.log(status);
      if (!status) {
        this.rout.routeToLogin();
      }
      return status;
    });
  }
}

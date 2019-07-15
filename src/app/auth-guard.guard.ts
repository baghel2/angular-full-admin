import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './login/UserAuthenticationService'

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private userAuthService: UserAuthenticationService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return UserAuthenticationService.isUserLogedInStatus();
  }
}

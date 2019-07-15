import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './login/user-authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userAuthService: UserAuthenticationService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(! this.userAuthService.isUserLogedInStatus()) {
    this.router.navigate(['/']);
    }
    return this.userAuthService.isUserLogedInStatus()
  }
}

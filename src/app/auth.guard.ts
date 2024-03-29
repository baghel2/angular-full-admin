import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthenticationService } from './service/user-authentication.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userAuthService: UserAuthenticationService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(! this.userAuthService.UserLogedInStatus()) {
    this.router.navigate(['/login']);
    }
    return this.userAuthService.UserLogedInStatus()
  }
}

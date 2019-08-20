import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { IUser } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginService } from './login.service';
import { userLogin } from './userLogin';
import { UserAuthenticationService } from './service/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./main.css','./material-design-iconic-font.css','./material-design-iconic-font.min.css']
})

export class LoginComponent {
    userModel = new userLogin();
    loginmsg:string;

  constructor(private route: ActivatedRoute,
        private router: Router, private loginservice: LoginService, private userAuthService: UserAuthenticationService)
    {}

  UserLogin() {
     this.loginservice.login(this.userModel).subscribe(
       data => {
        // this.userModel = data;
         this.userAuthService.setLogin(data);
         this.router.navigateByUrl('home');
       },
       error => {
         window.alert(error);
         this.loginmsg='Inccorect username or password.';
         this.router.navigateByUrl('login');
          } 
       );
  }

logOut(){
  //this.userModel =null;
this.userAuthService.logOut();
this.router.navigateByUrl('login');
}


}
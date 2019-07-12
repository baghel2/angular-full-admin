import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { IUser } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginService } from './login.service';
import { userLogin } from './userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./main.css','./material-design-iconic-font.css','./material-design-iconic-font.min.css']
})

export class LoginComponent {
    userModel = new userLogin();
    loginmsg:string;
    errorMessage: string;
    public users: Object;

  constructor(private route: ActivatedRoute,
        private router: Router, private loginservice: LoginService)
    {}

  UserLogin() {
alert('hi');
    //this.loginservice.userLogin().subscribe(data => this.users = data,
     this.loginservice.login(this.userModel).subscribe(
       data => {
         console.log(data),console.log('completed') 
       },
       error => {
         this.errorMessage = error; 
         window.alert(error.message); } 
       );

    if(this.userModel.username=='12345' && this.userModel.password=='12345')
    {
    this.router.navigateByUrl('home');
    }
    else
    {
      this.loginmsg='Inccorect username or password.';
      this.router.navigateByUrl('login');
    }
  }



}
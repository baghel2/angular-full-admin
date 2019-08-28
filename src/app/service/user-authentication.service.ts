import { Injectable } from '@angular/core';
import { userLogin } from '../login/userLogin'

@Injectable()
export class UserAuthenticationService {

  private isUserLoggedIn: boolean;
  user : userLogin;

  constructor() {  
    this.isUserLoggedIn = false;
   }

   setLogin( user )
   {
     this.isUserLoggedIn = true;
     this.user = user;
     console.log(this.user);
   }

   UserLogedInStatus(){
     return this.isUserLoggedIn;
   }

   getLoggedInUser()
   { 
     return this.user;
   }
 
   logOut(){
     this.user =null;
     this.isUserLoggedIn =false;
   }


}
import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {

  private isUserLoggedIn: boolean;
  private username: string;
  private token : string;

  constructor() {  
    this.isUserLoggedIn = false;
   }

   setLogin( username, _token )
   {
     this.isUserLoggedIn = true;
     this.token = _token ;
     this.username =username ;
   }

   isUserLogedInStatus(){
     return this.isUserLoggedIn;
   }

}
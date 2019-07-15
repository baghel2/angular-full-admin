import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {

  private isUserLoggedIn: boolean;
  private username: string;
  private token : string;

  constructor() {  
    this.isUserLoggedIn = false;
   }

   setLogin( username )
   {
     this.isUserLoggedIn =true;
   }

   isUserLogedInStatus(){
     return this.isUserLoggedIn;
   }

}
import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../login/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
   
   w3_openvar:string="none";

  constructor(private userAuthService: UserAuthenticationService) { 
  }

  ngOnInit() {
  console.log(this.userAuthService.getLoggedInUser().userName);
  }
// Script to open and close sidebar
 w3_open() {
   // document.getElementById("mySidebar").style.display = "block";
   // document.getElementById("myOverlay").style.display = "block";
    this.w3_openvar="block";
}
w3_close() {
    //document.getElementById("mySidebar").style.display = "none";
     this.w3_openvar="none";
}
}
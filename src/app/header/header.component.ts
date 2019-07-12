import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
   w3_openvar:string="none";
  constructor() { }

  ngOnInit() {
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
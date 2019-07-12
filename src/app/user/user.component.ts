import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetails } from '../model/userDetails';
import { Designation } from '../model/designation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user=new UserDetails();
  designation = new Designation();
  message:string;
  constructor() { }

  ngOnInit() {
    this.user=new UserDetails();
  }

   Save(): string {
     alert(this.user.fname);
     this.message='user saved successfully.';
     
     return 'user saved successfully.';
  }

    submit(): string {
     alert('saved');
     this.message='user saved successfully.';
     return 'user saved successfully.';
  }

}
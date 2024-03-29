import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent }      from './home/home.component';
import { UserComponent }      from './user/user.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
   { path: 'user', component: UserComponent},
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard],
    children: [

              { path: '', component: DashboardComponent },
              { path: 'dashboard',component: DashboardComponent},
              { path: 'user', component: UserComponent}
             ]
    },
    {
        path: "**",
        component: LoginComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }      from '../user/user.component';
import { LoginComponent }      from '../login/login.component';
import { DashboardComponent }   from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    children: [
              { path: '/dashboard/user', component: UserComponent}
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
export class DashRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
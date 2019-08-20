import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { LoginComponent }    from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { DashRoutingModule }      from './dashboard/dash-routing.module';
import { settingsService } from './settings.service';
import { UserAuthenticationService } from './login/user-authentication.service';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './header/footer.component';
import { ConfigurationService } from './service/configuration.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule
  
    //DashRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   // HttpClientInMemoryWebApiModule.forRoot(
     // InMemoryDataService, { dataEncapsula//tion: false }
    //)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent
   
  ],
  providers: [settingsService, MessageService, UserService, LoginService, UserAuthenticationService , AuthGuard, ConfigurationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
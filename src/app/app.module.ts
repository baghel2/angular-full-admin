import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { ProductComponent }    from './product/product.component';
import { LoginComponent }    from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { TestComponent } from './home/test/test.component';
import { DashRoutingModule }      from './dashboard/dash-routing.module';
import { LoginService } from './login/login.service';
import { settingsService } from './settings.service';

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
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    TestComponent
    
   
  ],
  providers: [settingsService, HeroService, MessageService, UserService, LoginService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
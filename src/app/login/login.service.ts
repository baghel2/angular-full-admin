import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { userLogin } from './userLogin';

import {ConfigurationService} from '../service/configuration.service';



@Injectable() export class LoginService
{
constructor(private http: HttpClient, private configuration: ConfigurationService){}

private _url : string = this.configuration.baseApiUrl+ 'login';

login(UserLogin: userLogin)
{
  return this.http.post<any>(this._url, UserLogin).pipe(
       retry(1),
       catchError(this.handleError));
}

GetCalData(UserLogin: userLogin)
{
  return this.http.post<any>(this._url, UserLogin);
}

handleError(error) {
 
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }


}
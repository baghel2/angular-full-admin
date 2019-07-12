import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { userLogin } from './userLogin';


@Injectable() export class LoginService
{
constructor(private http: HttpClient){}

private _url: string = './employee.json';

private url2 : string = 'http://localhost:17351/api/login';

userLogin(): Observable<IUser[]>
{
  return this.http.get<IUser[]>(this._url);
  
}

login(UserLogin: userLogin)
{
  console.log(UserLogin);
  return this.http.post<any>(this.url2, UserLogin).pipe(
       retry(1),
       catchError(this.handleError));
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
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable() export class LoginService
{
constructor(private http: HttpClient){}

private _url: string = './employee.json';

private url2 : string = 'http://localhost:17351/api/leave/leavetype';

userLogin(): Observable<IUser[]>
{
  return this.http.get<IUser[]>(this._url);
  
}

login(): Observable<Object[]>
{
  return this.http.get<Object[]>(this.url2).pipe(
      retry(1),
      catchError(this.handleError)
      );
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
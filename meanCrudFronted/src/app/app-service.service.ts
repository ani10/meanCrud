import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUsers } from './models/user.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = "http://localhost:4201/users/";
  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side error:" + errorResponse.error)
    } else {
      console.error("Server Side error:" + errorResponse)
    }
    return throwError("The service ahs a problem: " + errorResponse)
  }

  getAllUsers(): Observable<IUsers[]> {
    return this.httpClient
      .get<IUsers[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  getUser(id: string): Observable<IUsers>{
    return this.httpClient
      .get<IUsers>(this.baseUrl+id)
      .pipe(catchError(this.handleError));
  }
  updateUserById(id: string, payload): Observable<IUsers> {
    return this.httpClient
      .put<IUsers>(this.baseUrl+id+'update', payload)
      .pipe(catchError(this.handleError));
  }
  createUser(payload:string): Observable<IUsers> {
    return this.httpClient
      .post<IUsers>(this.baseUrl+'/user-create', payload)
      .pipe(catchError(this.handleError))
  }
  deleteUser(id:string): Observable<IUsers> {
    return this.httpClient
      .delete<IUsers>(this.baseUrl+id+'/delete')
      .pipe(catchError(this.handleError));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private getAllUrl = "http://localhost:4201/users/";
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.getAllUrl);
  }
  getUser(id: string){
    return this.http.get(this.getAllUrl+id);
  }
  updateUserById(id: string, payload) {
    return this.http.put(this.getAllUrl+id+'update', payload);
  }
  createUser(payload:string) {
    return this.http.post(this.getAllUrl+'/user-create', payload)
  }
  deleteUser(id:string) {
    return this.http.delete(this.getAllUrl+id+'/delete');
  }
}

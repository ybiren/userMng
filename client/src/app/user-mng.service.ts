import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UserMngService {

  private url = "http://localhost:3000/users"
 

  constructor(private http: HttpClient) { }

  public GetUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(catchError(this.handleError.bind(this)));
  }

  public UpdateUser(user: IUser) {
    return this.http.put(this.url,user).pipe(catchError(this.handleError.bind(this)));;
  }

  public InsertUser(user: IUser) {
    return this.http.post(this.url,user).pipe(catchError(this.handleError.bind(this)));;
  }

  public DeleteUser(user: IUser) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: user
    }
    
    return this.http.delete(this.url, options).pipe(catchError(this.handleError.bind(this)));
  }

   private handleError() {
     alert("An error as occured");
   }
}

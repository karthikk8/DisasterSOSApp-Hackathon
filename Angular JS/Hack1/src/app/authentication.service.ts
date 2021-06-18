import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { register } from './register';
import { user } from './user';
import { map } from 'rxjs/operators';
import { UserDetails } from './userdetails';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

   getusers(userr: user): Observable<any> {
    console.log("GET USER");
    return this.httpClient.post<any>(`url`, userr, { headers: new HttpHeaders().set('responseType', 'text')}).pipe(
      map(
        userData => {
         sessionStorage.setItem('username',userr.emailaddress);
         let tokenStr = userData.token;
         console.log("Token string: " + tokenStr);
         localStorage.setItem('token', tokenStr);
         return userData;
        }
      )
    );
  }

  
  addUser(register: UserDetails): Observable<UserDetails> {
    return this.httpClient.post<UserDetails>('https://disastersos.mybluemix.net/registeruser', register);
  
  }
  getUserDetails(register: any): Observable<any> {
    return this.httpClient.get<any>('https://disastersos.mybluemix.net/registeruser');
  }
  setBearerToken(token: string) {
    sessionStorage.setItem('token',token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }
}
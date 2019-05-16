import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  authenticateUser(data) {
    return this.http.post('http://localhost:3000/auth/v1', data);
  }

  setBearerToken(token) {
    localStorage.setItem('token', token);
    console.log(token);

  }

  getBearerToken() {
    return localStorage.getItem('token');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated', null, {
      headers: new HttpHeaders().set('Authorization', `Bearer${token}`)
    })
      .pipe(map(response => response['isAuthenticated'])).toPromise();
  }
}

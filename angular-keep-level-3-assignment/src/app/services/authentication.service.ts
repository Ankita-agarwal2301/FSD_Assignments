import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { log } from 'util';
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  authenticateUser(data) {
    return this.http.post('http://localhost:3000/auth/v1', data);
  }

  setBearerToken(token) {
    localStorage.setItem('token', token);
  }

  getBearerToken() {
    return localStorage.getItem('token');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated', null,
      { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) })
      .pipe(map(response => response['isAuthenticated'])).toPromise();
  }
}

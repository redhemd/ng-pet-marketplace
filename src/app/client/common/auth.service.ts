//  Firebase Login
//  Email: user@mail.com
//  Password: 123456

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(User) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        User
      )
      .pipe(tap(this.setToken));
  }

  private setToken(response) {
    if (response) {
      const expiredDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );

      localStorage.setItem('fb-token-expired', expiredDate.toString());
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  logout() {
    this.setToken(null);
  }

  get token() {
    const expiredDate = new Date(localStorage.getItem('fb-token-expired'));
    if (new Date() > expiredDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  isAuthentificated() {
    return !!this.token;
  }
}

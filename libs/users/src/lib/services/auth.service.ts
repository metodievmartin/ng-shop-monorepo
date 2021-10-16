import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { LocalStorageService, User } from '@libs/users';
import { ApiResponseAuthI } from '@libs/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURLUsers = environment.hostUrl + environment.apiVersion + environment.usersUrl;

  constructor(
    private http: HttpClient,
    private token: LocalStorageService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<ApiResponseAuthI<User>>(`${this.apiURLUsers}/login`, { email, password })
      .pipe(
        map(res => {
          res.data.token = res.token;

          return res.data;
        })
      );
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }
}

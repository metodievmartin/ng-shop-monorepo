import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import * as countriesLib from 'i18n-iso-countries';
import { User } from '@libs/users';
import { ApiResponseCollectionI, ApiResponseDocI, CountryCodeI } from '@libs/interfaces';

declare const require: any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURLUsers = environment.hostUrl + environment.apiVersion + environment.usersUrl;

  constructor(private http: HttpClient) {
    countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<ApiResponseCollectionI<User>>(this.apiURLUsers)
      .pipe(
        map(res => res.data)
      );
  }

  getUser(userId: string): Observable<User> {
    return this.http
      .get<ApiResponseDocI<User>>(`${this.apiURLUsers}/${userId}`)
      .pipe(
        map(res => res.data)
      );
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<ApiResponseDocI<User>>(this.apiURLUsers, user)
      .pipe(
        map(res => res.data)
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<ApiResponseDocI<User>>(`${this.apiURLUsers}/${user._id}`, user)
      .pipe(
        map(res => res.data)
      );
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLUsers}/${userId}`);
  }

  getUsersCount(): Observable<number> {
    return this.http
      .get<ApiResponseDocI<number>>(`${this.apiURLUsers}/get/count`)
      .pipe(
        map((res) => res.data)
      );
  }

  getCountries(): CountryCodeI[] {
    return Object.entries(countriesLib
      .getNames('en', { select: 'official' }))
      .map((entry) => {
        return {
          id: entry[0],
          name: entry[1]
        };
      });
  }

  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en');
  }
}

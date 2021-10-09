// Core Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Project Imports
import { ApiResponseCollectionI, ApiResponseDocI } from '@libs/interfaces';
import { Category } from '../models/category';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiURLCategories = environment.hostUrl + environment.apiVersion + environment.categoriesUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<ApiResponseCollectionI<Category>>(this.apiURLCategories)
      .pipe(
        map(res => res.data)
      );
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http
      .get<ApiResponseDocI<Category>>(`${this.apiURLCategories}/${categoryId}`)
      .pipe(
        map(res => res.data)
      );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http
      .post<ApiResponseDocI<Category>>(this.apiURLCategories, category)
      .pipe(
        map(res => res.data)
      );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http
      .put<ApiResponseDocI<Category>>(`${this.apiURLCategories}/${category._id}`, category)
      .pipe(
        map(res => res.data)
      );
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLCategories}/${categoryId}`);
  }
}

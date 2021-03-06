import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { ApiResponseCollectionI, ApiResponseDocI } from '@libs/interfaces';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURLProducts = environment.hostUrl + environment.apiVersion + environment.productsUrl;

  constructor(private http: HttpClient) {
  }

  getProducts(categoriesFilter?: string[]): Observable<Product[]> {
    let params = new HttpParams();
    if (categoriesFilter) {
      params = params.append('category', categoriesFilter.join(','));
    }

    return this.http
      .get<ApiResponseCollectionI<Product>>(this.apiURLProducts, { params })
      .pipe(
        map(res => res.data)
      );
  }

  getFeaturedProducts(productsCount: number): Observable<Product[]> {
    return this.http
      .get<ApiResponseCollectionI<Product>>(
        `${this.apiURLProducts}?isFeatured=true&limit=${productsCount}`
      )
      .pipe(
        map(res => res.data)
      );
  }

  createProduct(productData: FormData): Observable<Product> {
    return this.http
      .post<ApiResponseDocI<Product>>(this.apiURLProducts, productData)
      .pipe(
        map(res => res.data)
      );
  }

  getProduct(productId: string): Observable<Product> {
    return this.http
      .get<ApiResponseDocI<Product>>(`${this.apiURLProducts}/${productId}`)
      .pipe(
        map(res => res.data)
      );
  }

  updateProduct(productData: FormData, productId: string): Observable<Product> {
    return this.http
      .put<ApiResponseDocI<Product>>(`${this.apiURLProducts}/${productId}`, productData)
      .pipe(
        map(res => res.data)
      );
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLProducts}/${productId}`);
  }

  getProductsCount(): Observable<number> {
    return this.http
      .get<ApiResponseDocI<number>>(`${this.apiURLProducts}/get/count`)
      .pipe(
        map((res) => res.data)
      );
  }
}

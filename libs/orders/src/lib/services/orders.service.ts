import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Order } from '../models/order';
import { ApiResponseCollectionI, ApiResponseDocI } from '@libs/interfaces';
import { Category } from '@libs/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiURLOrders = environment.hostUrl + environment.apiVersion + environment.ordersUrl;

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http
      .get<ApiResponseCollectionI<Order>>(this.apiURLOrders)
      .pipe(
        map(res => res.data)
      );
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http
      .get<ApiResponseDocI<Order>>(`${this.apiURLOrders}/${orderId}`)
      .pipe(
        map(res => res.data)
      );
  }

  createOrder(order: Order): Observable<Order> {
    return this.http
      .post<ApiResponseDocI<Order>>(this.apiURLOrders, order)
      .pipe(
        map(res => res.data)
      );
  }

  updateOrder(orderStatus: { status: string }, orderId: string): Observable<Order> {
    return this.http
      .put<ApiResponseDocI<Order>>(`${this.apiURLOrders}/${orderId}`, orderStatus)
      .pipe(
        map(res => res.data)
      );
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLOrders}/${orderId}`);
  }
}

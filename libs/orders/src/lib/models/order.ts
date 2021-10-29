import { BaseOrder } from './base-order';

export interface Order extends BaseOrder {
  _id: string;
  totalPrice: string;
}

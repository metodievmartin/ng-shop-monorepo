import { OrderItem } from './order-item';
import { User } from '@libs/users';

export interface BaseOrder {
  orderItems: OrderItem[];
  shippingAddress1: string;
  shippingAddress2?: string;
  city: string;
  zip?: string;
  country: string;
  phone: string;
  status: number;
  user: User;
  dateOrdered: string;
}

import { Product } from '@libs/products';

export interface OrderItem {
  product: Product;
  quantity: number;
}

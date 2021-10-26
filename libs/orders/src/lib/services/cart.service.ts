import { Injectable } from '@angular/core';
import { CartItem } from '@libs/orders';
import { Cart } from '@libs/orders';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '@libs/products';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$ = new BehaviorSubject<Cart>({
    items: []
  });

  addedProduct$ = new Subject<Product>();

  constructor() {
  }

  initCartLocalStorage(): void {
    let cart: Cart = {
      items: []
    };

    const cartString = localStorage.getItem(CART_KEY);
    if (cartString !== null) {
      cart = JSON.parse(cartString);
    }

    this.cart$.next(cart);

    this.saveCart(cart);
  }

  getCart(): Cart {
    if (localStorage.getItem(CART_KEY) === null) {
      this.initCartLocalStorage();
    }

    return JSON.parse(localStorage.getItem(CART_KEY) as string);
  }

  saveCart(cart: Cart): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  setCartItem(cartItem: CartItem, product: Product | null): Cart {
    const cart = this.getCart();

    const existingCartItem = cart.items
      .find(item => item.productId === cartItem.productId);

    existingCartItem
      ? existingCartItem.quantity += cartItem.quantity
      : cart.items.push(cartItem);

    this.saveCart(cart);

    this.cart$.next(cart);

    if (product) {
      this.addedProduct$.next(product);
    }

    return cart;
  }
}

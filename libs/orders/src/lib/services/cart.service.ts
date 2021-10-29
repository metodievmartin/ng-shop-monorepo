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

  emptyCart() {
    const initialCart = {
      items: []
    };
    const initialCartJson = JSON.stringify(initialCart);
    localStorage.setItem(CART_KEY, initialCartJson);
    this.cart$.next(initialCart);
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

  setCartItem(cartItem: CartItem, product: Product | null, updateCartItem?: boolean): Cart {
    const cart = this.getCart();

    const existingCartItem = cart.items
      .find(item => item.productId === cartItem.productId);

    existingCartItem
      ? this._updateCartItemQuantity(cartItem, existingCartItem, updateCartItem)
      : this._addNewCartItemToCart(cartItem, cart);


    this.saveCart(cart);

    this.cart$.next(cart);

    if (product) {
      this.addedProduct$.next(product);
    }

    return cart;
  }

  private _updateCartItemQuantity(cartItem: CartItem, existingCartItem: CartItem, updateCartItem?: boolean) {
    updateCartItem
      ? existingCartItem.quantity = cartItem.quantity
      : existingCartItem.quantity += cartItem.quantity
  }

  private _addNewCartItemToCart(cartItem: CartItem, cart: Cart) {
    cart.items.push(cartItem);
  }

  deleteCartItem(productId: string) {
    const cart = this.getCart();
    const newCart = cart.items.filter((item) => item.productId !== productId);

    cart.items = newCart;

    const cartJsonString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJsonString);

    this.cart$.next(cart);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { CartItemDetailed } from '../../models/cart-item-detailed';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',

})
export class CartPageComponent implements OnInit, OnDestroy {

  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$ = new Subject<never>();

  constructor(
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService
    ) { }

  ngOnInit(): void {
    this._getCartDetails();
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product._id);
  }

  // This will be refactored
  private _getCartDetails() {
    this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((respCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = respCart?.items.length ?? 0;
      respCart.items.forEach((cartItem) => {
        this.ordersService.getProduct(cartItem.productId).subscribe((respProduct) => {
          this.cartItemsDetailed.push({
            product: respProduct,
            quantity: cartItem.quantity
          });
        });
      });
    });
  }

  updateCartItemQuantity(event: any, cartItem: CartItemDetailed) {
    console.log(event.value);
    this.cartService.setCartItem(
      {
        productId: cartItem.product._id,
        quantity: event.value
      },
      null,
      true
    );
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}

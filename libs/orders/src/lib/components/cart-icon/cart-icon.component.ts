import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'orders-cart-icon',
  templateUrl: './cart-icon.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class CartIconComponent implements OnInit {
  cartItemsCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartItemsCount = cart.items.reduce((acc, value) => {
        return acc += value.quantity;
      }, 0);
    });
  }

}

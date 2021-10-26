import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { CartService } from '@libs/orders';

@Component({
  selector: 'products-product-item',
  templateUrl: './products-item.component.html',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addProductToCart() {
    const cartItem = {
      productId: this.product?._id || '-1',
      quantity: 1
    }

    this.cartService.setCartItem(cartItem, this.product);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CartItem, CartService } from '@libs/orders';

@Component({
  selector: 'products-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  endSubs$ = new Subject<never>();
  product: Product | null = null;
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.productId) {
        this._getProduct(params.productId);
      }
    });
  }

  private _getProduct(productId: string) {
    this.productService.getProduct(productId)
      .pipe(takeUntil(this.endSubs$))
      .subscribe(prod => this.product = prod);
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product?._id || '-1',
      quantity: this.quantity
    }

    this.cartService.setCartItem(cartItem, this.product);
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}

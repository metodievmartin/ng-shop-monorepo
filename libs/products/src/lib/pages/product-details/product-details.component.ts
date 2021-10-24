import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductsService } from '@libs/products';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'products-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  endSubs$ = new Subject<never>();
  product: Product | null = null;
  quantity = 0;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
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

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  addProductToCart() {

  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-featured-products',
  templateUrl: './featured-products.component.html',
})
export class FeaturedProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products = productsService.getFeaturedProducts(4);
  }

  ngOnInit(): void {
  }

}

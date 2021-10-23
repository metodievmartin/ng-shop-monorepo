import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@libs/products';

@Component({
  selector: 'products-product-item',
  templateUrl: './products-item.component.html',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

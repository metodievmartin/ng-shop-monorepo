import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { OrdersModule } from '@libs/orders';


@NgModule({
  declarations: [
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    OrdersModule,
  ],
  exports: [
    ProductSearchComponent
  ]
})
export class ProductsModule { }

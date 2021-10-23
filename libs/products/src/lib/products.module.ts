import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './components/products-item/products-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CategoriesBannerComponent,
    ProductSearchComponent,
    ProductItemComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    CategoriesBannerComponent,
    ProductSearchComponent,
    ProductItemComponent,
    FeaturedProductsComponent
  ],
  providers: []
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoriesBannerComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoriesBannerComponent,
    ProductSearchComponent
  ],
  providers: []
})
export class ProductsModule { }

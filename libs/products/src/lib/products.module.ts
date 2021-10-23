import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { ProductItemComponent } from './components/products-item/products-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesBannerComponent,
    ProductSearchComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    CheckboxModule,
    FormsModule
  ],
  exports: [
    CategoriesBannerComponent,
    ProductSearchComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsListComponent
  ],
  providers: []
})
export class ProductsModule { }

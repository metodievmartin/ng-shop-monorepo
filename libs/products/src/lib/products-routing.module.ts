import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'category/:categoryId', component: ProductsListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

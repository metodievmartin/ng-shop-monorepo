import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { AuthGuard } from '@libs/users';

const routes: Routes = [
  { path: 'cart', component:  CartPageComponent },
  { path: 'checkout', component:  CheckoutPageComponent, canActivate: [AuthGuard] },
  { path: 'success', component:  ThankYouPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    BadgeModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule
  ],
  exports: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent
  ]
})
export class OrdersModule {
  constructor(private cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}

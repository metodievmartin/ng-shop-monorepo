import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { User, UsersService } from '@libs/users';
import { CountryCodeI } from '@libs/interfaces';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { OrderItem } from '../../models/order-item';
import { BaseOrder } from '../../models/base-order';


@Component({
  selector: 'orders-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: []
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  checkoutFormGroup!: FormGroup;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  userId = '609d65943373711346c5e950';
  user!: User;
  countries: CountryCodeI[] = [];
  unsubscribe$ = new Subject();

  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private ordersService: OrdersService
  ) {
  }

  ngOnInit(): void {
    this._initCheckoutForm();
    this._autoFillUserData();
    this._getCartItems();
    this._getCountries();
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    this.orderItems = cart.items.map((item) => ({
      product: item.productId,
      quantity: item.quantity
    }));
  }

  private _getCountries() {
    this.countries = this.usersService.getCountries();
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

    const order: BaseOrder = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm.street.value,
      shippingAddress2: this.checkoutForm.apartment.value,
      city: this.checkoutForm.city.value,
      zip: this.checkoutForm.zip.value,
      country: this.checkoutForm.country.value,
      phone: this.checkoutForm.phone.value,
      status: 0,
      user: this.user,
      dateOrdered: `${Date.now()}`
    };

    this.ordersService.createOrder(order).subscribe(
      () => {
        //redirect to thank you page // payment
        this.cartService.emptyCart();
        this.router.navigate(['/success']);
      },
      () => {
        //display some message to user
      }
    );
  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }

  private _autoFillUserData() {
    this.usersService.observeCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => {
        console.log(user);
        if (user) {
          this.user = user;
        }
        this.checkoutForm.name.setValue(user?.name);
        this.checkoutForm.email.setValue(user?.email);
        this.checkoutForm.phone.setValue(user?.phone);
        this.checkoutForm.city.setValue(user?.city);
        this.checkoutForm.country.setValue(user?.country);
        this.checkoutForm.zip.setValue(user?.zip);
        this.checkoutForm.apartment.setValue(user?.apartment);
        this.checkoutForm.street.setValue(user?.street);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


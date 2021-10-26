import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '@libs/orders';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'eshop-notification',
  templateUrl: './notification.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotificationComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.cartService.addedProduct$.subscribe(product => {
      this.showSuccessNotification(`${product.name} added to cart!`);
    });
  }

  showSuccessNotification(message: string) {
    this.messageService.add({
      severity:'success',
      summary: 'Success',
      detail: message
    });
  }
}

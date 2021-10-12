import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { Order, OrdersService } from '@libs/orders';
import { ORDER_STATUS } from '../order.constants';
import { OnChangeEventI, OrderStatusInfoI } from '@libs/interfaces';


@Component({
  selector: 'admin-orders-detail',
  templateUrl: './order-details.component.html',
  styles: []
})
export class OrderDetailsComponent implements OnInit {
  order!: Order;
  orderStatuses: OrderStatusInfoI[] = [];
  selectedStatus: number | undefined;

  constructor(
    private orderService: OrdersService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }

  private _mapOrderStatus() {
    this.orderStatuses = Object.keys(ORDER_STATUS)
      .map((key) => {
        const statusLabel = ORDER_STATUS[key].label;
        return {
          id: key,
          name: statusLabel
        };
      });
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.orderService.getOrder(params.id).subscribe((order) => {
          this.order = order;
          this.selectedStatus = order.status;
        });
      }
    });
  }



  onStatusChange(event: OnChangeEventI<string>) {
    const statusIndex = event.value;
    this.orderService.updateOrder({ status: statusIndex }, this.order._id).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Order status is updated to ${ORDER_STATUS[statusIndex].label}!`
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Order is not updated!'
        });
      }
    );
  }
}

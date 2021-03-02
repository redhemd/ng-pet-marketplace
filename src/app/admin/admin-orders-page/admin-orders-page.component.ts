import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/client/common/order.service';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrls: ['./admin-orders-page.component.scss'],
})
export class AdminOrdersPageComponent implements OnInit {
  orders = [];
  productSub: Subscription;
  productUnsub: Subscription;

  constructor(
    private ordersService: OrderService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.productSub = this.ordersService.getAll().subscribe((orders) => {
      this.orders = orders;
    });
  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe;
    }

    if (this.productUnsub) {
      this.productUnsub.unsubscribe;
    }
  }

  remove(id) {
    this.productUnsub = this.ordersService.remove(id).subscribe(() => {
      this.orders = this.orders.filter((order) => {
        order.id !== id;
      });
      this.alertService.danger('Order has been completed and deleted');
    });
  }
}

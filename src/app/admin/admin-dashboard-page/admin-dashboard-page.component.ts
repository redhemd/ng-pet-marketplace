import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/client/common/product.service';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss'],
})
export class AdminDashboardPageComponent implements OnInit {
  products = [];
  productSub: Subscription;
  productUnsub: Subscription;
  productName;

  constructor(
    public productService: ProductService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.productSub = this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }

    if (this.productUnsub) {
      this.productUnsub.unsubscribe();
    }
  }

  delete(id) {
    this.productUnsub = this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter((product) => {
        product.id !== id;
      });
      this.alertService.danger('Post have been deleted!');
    });
  }
}

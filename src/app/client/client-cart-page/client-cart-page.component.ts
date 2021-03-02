import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/admin/common/alert.service';
import { OrderService } from '../common/order.service';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-client-cart-page',
  templateUrl: './client-cart-page.component.html',
  styleUrls: ['./client-cart-page.component.scss'],
})
export class ClientCartPageComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0;
  formForDelivery: FormGroup;
  sbmBoolean = false;
  formIsAdded = '';

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.cartOfProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
    }

    this.formForDelivery = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    });
  }

  delete(product) {
    this.totalPrice -= +product.price;
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }

  submit() {
    if (this.formForDelivery.invalid) {
      return;
    }

    this.sbmBoolean = true;

    const order = {
      name: this.formForDelivery.value.name,
      phone: this.formForDelivery.value.phone,
      address: this.formForDelivery.value.address,
      payment: this.formForDelivery.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date(),
    };

    this.orderService.create(order).subscribe((response) => {
      this.formForDelivery.reset();
      this.sbmBoolean = false;
      // this.formIsAdded = 'Delivery is framed!';
      this.alertService.success('Delivery is framed');
      this.router.navigate(['/']);
    });
  }
}

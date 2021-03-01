import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/client/common/product.service';
import { AlertService } from '../common/alert.service';

@Component({
  selector: 'app-admin-create-page',
  templateUrl: './admin-create-page.component.html',
  styleUrls: ['./admin-create-page.component.scss'],
})
export class AdminCreatePageComponent implements OnInit {
  form: FormGroup;
  sbmBoolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private alertServie: AlertService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.sbmBoolean = true;

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date(),
    };

    this.productService.create(product).subscribe((response) => {
      this.form.reset();
      this.alertServie.success('Product have been created!');
      this.sbmBoolean = false;
      this.router.navigate(['/admin', 'dashboard']);
    });
  }
}

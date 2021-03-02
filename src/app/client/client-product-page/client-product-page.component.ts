import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../common/interfaces';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-client-product-page',
  templateUrl: './client-product-page.component.html',
  styleUrls: ['./client-product-page.component.scss'],
})
export class ClientProductPageComponent implements OnInit {
  productStream: Observable<Product>;

  constructor(
    public productService: ProductService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productStream = this.route.params.pipe(
      switchMap((params) => {
        return this.productService.getById(params['id']);
      })
    );
  }
  addToCart(product) {
    this.productService.addProduct(product);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.scss'],
})
export class ClientProductComponent implements OnInit {
  @Input() product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(product) {
    this.productService.addProduct(product);
  }
}

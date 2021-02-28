import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-client-main-page',
  templateUrl: './client-main-page.component.html',
  styleUrls: ['./client-main-page.component.scss'],
})
export class ClientMainPageComponent implements OnInit {
  productStream;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productStream = this.productService.getAll();
  }
}

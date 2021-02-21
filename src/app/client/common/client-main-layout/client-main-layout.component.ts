import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar-layout',
  templateUrl: './client-main-layout.component.html',
  styleUrls: ['./client-main-layout.component.scss'],
})
export class ClientMainLayoutComponent implements OnInit {
  type = 'Phones';

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  setType(type) {
    this.type = type;

    if (this.type !== 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type,
        },
      });
    }

    this.productService.setType(this.type);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }
}

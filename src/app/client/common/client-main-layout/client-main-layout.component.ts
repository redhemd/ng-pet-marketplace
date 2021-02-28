import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar-layout',
  templateUrl: './client-main-layout.component.html',
  styleUrls: ['./client-main-layout.component.scss'],
})
export class ClientMainLayoutComponent implements OnInit {
  type = 'Phones';

  constructor(
    private router: Router,
    private productService: ProductService,
    private authService: AuthService
  ) {}

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
    if (this.authService.isAuthentificated()) {
      this.router.navigate(['admin', 'dashboard']);
    } else {
      this.router.navigate(['admin']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client/common/auth.service';

@Component({
  selector: 'app-admin-main-layout',
  templateUrl: './admin-main-layout.component.html',
  styleUrls: ['./admin-main-layout.component.scss'],
})
export class AdminMainLayoutComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  logout($event) {
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin', 'login']);
  }
}

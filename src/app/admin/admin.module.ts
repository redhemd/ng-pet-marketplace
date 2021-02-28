import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminMainLayoutComponent } from './common/admin-main-layout/admin-main-layout.component';
import { AdminCreatePageComponent } from './admin-create-page/admin-create-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminOrdersPageComponent } from './admin-orders-page/admin-orders-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../client/common/auth.guard';
import { QuillModule } from 'ngx-quill';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MatProgressSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminMainLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
          {
            path: 'create',
            component: AdminCreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'dashboard',
            component: AdminDashboardPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'orders',
            component: AdminOrdersPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'product/:id/edit',
            component: AdminEditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminMainLayoutComponent,
    AdminCreatePageComponent,
    AdminDashboardPageComponent,
    AdminEditPageComponent,
    AdminLoginPageComponent,
    AdminOrdersPageComponent,
  ],
})
export class AdminModule {}

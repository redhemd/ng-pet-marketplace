import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCartPageComponent } from './client/client-cart-page/client-cart-page.component';
import { ClientMainLayoutComponent } from './client/common/client-main-layout/client-main-layout.component';
import { ClientMainPageComponent } from './client/client-main-page/client-main-page.component';
import { ClientProductPageComponent } from './client/client-product-page/client-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientMainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: ClientMainPageComponent },
      { path: 'product/:id', component: ClientProductPageComponent },
      { path: 'cart', component: ClientCartPageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

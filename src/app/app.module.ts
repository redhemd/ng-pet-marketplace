import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientMainPageComponent } from './client/client-main-page/client-main-page.component';
import { ClientProductPageComponent } from './client/client-product-page/client-product-page.component';
import { ClientProductComponent } from './client/client-product/client-product.component';
import { ClientMainLayoutComponent } from './client/common/client-main-layout/client-main-layout.component';
import { ClientCartPageComponent } from './client/client-cart-page/client-cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientMainPageComponent,
    ClientProductComponent,
    ClientProductPageComponent,
    ClientCartPageComponent,
    ClientMainLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientMainPageComponent } from './client/client-main-page/client-main-page.component';
import { ClientProductPageComponent } from './client/client-product-page/client-product-page.component';
import { ClientProductComponent } from './client/client-product/client-product.component';
import { ClientMainLayoutComponent } from './client/common/client-main-layout/client-main-layout.component';
import { ClientCartPageComponent } from './client/client-cart-page/client-cart-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './client/common/auth.interceptor';
import { QuillModule } from 'ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertComponent } from './admin/common/alert/alert.component';
import { AlertService } from './admin/common/alert.service';
import { SortPipe } from './client/common/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ClientMainPageComponent,
    ClientProductComponent,
    ClientProductPageComponent,
    ClientCartPageComponent,
    ClientMainLayoutComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

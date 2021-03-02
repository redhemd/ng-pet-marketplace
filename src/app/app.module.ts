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
import { AlertService } from './admin/common/alert.service';
import { SortPipe } from './client/common/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientAlertComponent } from './client/common/client-alert/client-alert.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ClientMainPageComponent,
    ClientProductComponent,
    ClientProductPageComponent,
    ClientCartPageComponent,
    ClientMainLayoutComponent,
    SortPipe,
    ClientAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

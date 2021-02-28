import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FirebaseResponse, Product } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  type = 'Phones';
  cartOfProducts: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  setType(type) {
    this.type = type;
  }

  create(product) {
    return this.httpClient
      .post(`${environment.firebaseDatabaseUrl}/products.json`, product)
      .pipe(
        map((response: FirebaseResponse) => {
          return {
            ...product,
            id: response.name,
            date: new Date(product.date),
          };
        })
      );
  }

  getAll() {
    return this.httpClient
      .get(`${environment.firebaseDatabaseUrl}/products.json`)
      .pipe(
        map((response) => {
          return Object.keys(response).map((key) => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date),
          }));
        })
      );
  }

  addProduct(product) {
    this.cartOfProducts.push(product);
  }

  getById(id) {
    return this.httpClient
      .get(`${environment.firebaseDatabaseUrl}/products/${id}.json`)
      .pipe(
        map((response: Product) => {
          return {
            ...response,
            id,
            date: new Date(response.date),
          };
        })
      );
  }

  delete(id) {
    return this.httpClient.delete(
      `${environment.firebaseDatabaseUrl}/products/${id}/.json`
    );
  }

  update(product: Product) {
    return this.httpClient.patch(
      `${environment.firebaseDatabaseUrl}/products/${product.id}/.json`,
      product
    );
  }
}

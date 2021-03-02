import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FirebaseResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public httpClient: HttpClient) {}

  create(order) {
    return this.httpClient
      .post(`${environment.firebaseDatabaseUrl}/orders.json`, order)
      .pipe(
        map((response: FirebaseResponse) => {
          return {
            ...order,
            id: response.name,
            date: new Date(order.date),
          };
        })
      );
  }

  getAll() {
    return this.httpClient
      .get(`${environment.firebaseDatabaseUrl}/orders.json`)
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

  remove(id) {
    return this.httpClient.delete(
      `${environment.firebaseDatabaseUrl}/orders/${id}.json`
    );
  }
}

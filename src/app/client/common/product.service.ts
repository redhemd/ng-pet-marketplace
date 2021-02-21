import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  type = 'Phones';

  constructor() {}

  setType(type) {
    this.type = type;
  }
}

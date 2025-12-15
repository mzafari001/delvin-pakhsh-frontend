
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  backend = inject(BackendService);


  list() {
    return this.backend.get('/api/v1/products/list');
  }
  add(product: Product) {
    return this.backend.post('/api/v1/products/create', product);

  }
  edit(id: string, product: Product) {
    return this.backend.put('/api/v1/products/update/' + id, product);
  }

  remove(id: string) {
    return this.backend.delete('/api/v1/products/remove/' + id);

  }

  // list() {
  //   return this.products;
  // }
  // add(product: Product) {
  //   product.id = this.lastId++;
  //   this.products.push(product);
  // }
  // edit(id: number, product: Product) {
  //   let index = this.products.indexOf(this.products.filter(m => m.id == id)[0]);
  //   this.products[index] = product;
  // }
  // remove(id: number) {
  //   this.products = this.products.filter(m => m.id != id);
  // }
}

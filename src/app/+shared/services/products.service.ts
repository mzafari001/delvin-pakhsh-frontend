
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);
  lastId: number = 8;

  async list() {
   return await this.http.get('http://localhost:5206/api/v1/products/list').toPromise();
  }
  async add(product: Product) {
    await this.http.post('http://localhost:5206/api/v1/products/create', product).toPromise();

  }
  async edit(id: string , product: Product) {

    await this.http.put('http://localhost:5206/api/v1/products/update/' + id , product).toPromise();
  }

  async remove(id: string) {
    await this.http.delete('http://localhost:5206/api/v1/products/remove/' + id).toPromise();

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

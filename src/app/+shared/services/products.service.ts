
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' // این یعنی در سراسر برنامه قابل دسترسیه
})
export class ProductsService {
  lastId :number= 8;

  private products: Product[] = [
    {
      id: 1,
      name: 'سس مایونز 900 گرمی دلپذیر',
      price: 45000000,
      description: '',
      imageUrl: 'p1.jpg'
    },
    {
      id: 2,
      name: 'پنیر لیقوان ',
      price: 1250000,
      description: '',
      imageUrl: 'p2.jpg'
    },
    {
      id: 3,
      name: 'مربا کنجد سیاه',
      price: 3500000,
      description: '',
      imageUrl: 'p3.jpg'
    },
    {
      id: 4,
      name: 'کره حیوانی شکلی',
      price: 3500000,
      description: '',
      imageUrl: 'p4.jpg'
    },
    {
      id: 5,
      name: 'ماست لیوانی 500 گرمی پویا',
      price: 3500000,
      description: '',
      imageUrl: 'p5.jpg'
    },
    {
      id: 6,
      name: 'حلوا شکری طراوت',
      price: 3500000,
      description: 'تهیه شده از بهترین مواد اولیه',
      imageUrl: 'p6.jpg'
    },
    {
      id: 7,
      name: 'رب گوجه 900گرمی طراوت',
      price: 3500000,
      description: 'خوشرنگ و خوش عطر',
      imageUrl: 'p7.jpg'
    }
  ];

  list() {
    return this.products;
  }
  add(product: Product) {
    product.id = this.lastId++;
    this.products.push(product);
  }
  edit(id: number, product: Product) {
    let index = this.products.indexOf(this.products.filter(m => m.id == id)[0]);
    this.products[index] = product;
  }
  remove(id: number) {
    this.products = this.products.filter(m => m.id != id);
  }
}

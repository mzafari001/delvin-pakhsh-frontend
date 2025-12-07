import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {


  private basket: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.basket);
  public cart$: Observable<Product[]> = this.cartSubject.asObservable();



  // متد افزودن (از قبل پیاده‌سازی شده)
  addProduct(product: Product): void {
    this.basket.push(product);
    this.cartSubject.next(this.basket);
  }

  /**
   * آیتمی را بر اساس ID از سبد خرید حذف می‌کند.
   */
  // removeProduct(productId: number): void {
  //   // فیلتر کردن آیتمی که ID آن با ID محصول حذف شده مطابقت ندارد
  //   this.basket = this.basket.filter(item => item.id !== productId);
  //   this.cartSubject.next(this.basket);
  // }

  /**
   * پاک کردن کامل سبد خرید
   */
  clearCart(): void {
    this.basket = [];
    this.cartSubject.next(this.basket);
  }
}

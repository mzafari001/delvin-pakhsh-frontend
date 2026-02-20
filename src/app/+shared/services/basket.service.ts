
import { Injectable, signal, computed } from '@angular/core';
import { BasketProduct } from '../models/basketProduct.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _basket = signal<BasketProduct[]>([]);
  basket = this._basket.asReadonly();

  count = computed(() =>
    this._basket().reduce((sum, item) => sum + item.count, 0)

  );

  addProduct(product: BasketProduct) {
    this._basket.update(items => {
      const existing = items.find(item => item.id == product.id);

      if (existing) {
        return items.map(item =>
          item.id == product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
 
      return [...items, { ...product, count: 1 }];
    });
  }

  decreaseProduct(productId: string) {
    this._basket.update(items =>
      items
        .map(item =>
          item.id == productId
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter(item => item.count > 0)
    );
  }

  removeProduct(productId: string) {
    this._basket.update(items =>
      items.filter(item => item.id !== productId)
    );
  }

  clearCart() {
    this._basket.set([]);
  }
}


import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../../../+shared/services/basket.service';
import { BasketProduct } from '../../../+shared/models/basketProduct.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

  basketService = inject(BasketService);
  cartItems = this.basketService.basket;

  totalPrice = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.price * item.count,
      0
    )
  );

  add(product: BasketProduct) {
    this.basketService.addProduct(product);
  }

  decrease(productId: string) {
    this.basketService.decreaseProduct(productId);
  }

  handleRemove(productId: string): void {
    this.basketService.removeProduct(productId);
  }

  clearBasket(): void {
    this.basketService.clearCart();
  }
}
 
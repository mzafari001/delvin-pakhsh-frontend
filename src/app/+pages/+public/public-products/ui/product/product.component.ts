
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../../+shared/models/product.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-product',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<string>();

  // handleAddToCart(): void {
  //   if (this.product && this.product.id) {
  //     this.addToCart.emit(this.product.id);
  //   }
  // }

  // /** دادهٔ دریافتی از والد */
  // @Input() product!: Product;

  // /** رخداد برای اطلاع والد از کلیک یا عملیات */
  // @Output() addToCart = new EventEmitter<Product>();

  // /** متد برای emit کردن محصول انتخاب‌شده */
  // onAddToCart(): void {
  //   this.addToCart.emit(this.product);
  // }
}

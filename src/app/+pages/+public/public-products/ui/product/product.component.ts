
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
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
  @Output() onBuy = new EventEmitter<Product>();

  buy(product: Product) {
    this.onBuy.emit(this.product);
  }

}

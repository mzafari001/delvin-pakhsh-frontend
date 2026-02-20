import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../../../../+shared/services/products.service';
import { BasketService } from '../../../../+shared/services/basket.service';
import { BasketProduct } from '../../../../+shared/models/basketProduct.model';
@Component({
  selector: 'app-products',
  imports: [
    ProductComponent
  ],
  templateUrl: 'public-products.component.html',
  styleUrl: 'public-products.component.scss'
})
export class PublicProductsComponent implements OnInit {
  ngOnInit(): void {
    this.productsServic.publicList().subscribe(r => {
      this.products = r;
    });
  }
  AddToBasket(product: BasketProduct) {
    this.basketService.addProduct(product);
  }
  productsServic = inject(ProductsService);
  basketService = inject(BasketService);
  products: any;

}

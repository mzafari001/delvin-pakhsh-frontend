
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../+shared/models/product.model';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../../../../+shared/services/products.service';
import { BasketService } from '../../../../+shared/services/basket.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [

    AsyncPipe,
    ProductComponent

  ],
  templateUrl: 'public-products.component.html',
  styleUrls: ['public-products.component.scss']
})
export class PublicProductsComponent {

  productsServic = inject(ProductsService);
  private basketService = inject(BasketService);

   products$ = this.productsServic.list();

  AddToBasket(product: Product) {
    this.basketService.addProduct(product);
    console.log(product);
  }



}

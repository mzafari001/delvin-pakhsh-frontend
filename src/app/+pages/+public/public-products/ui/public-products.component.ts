// src/app/products/products.component.ts (بازنویسی شده برای داده‌های درون کامپوننت)
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../+shared/models/product.model';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../../../../+shared/services/products.service';

// توجه: ProductsService و HttpClientModule دیگر ایمپورت نمی‌شوند

@Component({
  selector: 'app-products',
  imports: [ProductComponent,

  ],
  templateUrl: 'public-products.component.html',
  styleUrls: ['public-products.component.scss']
})
export class PublicProductsComponent  {
  productsServic=inject(ProductsService);
  products=this.productsServic.list();

  cartItems: string[] = [];

  // constructor() { } // حذف ProductsService از سازنده

  // ngOnInit(): void {
  //   this.loadMockProducts();
  // }

  /**
   * بارگذاری داده‌های Mock مستقیماً در داخل کامپوننت
   */

}

// متد مدیریت سبد خرید (بدون تغییر)
// onAddToCart(productId: string): void {
//   this.cartItems.push(productId);
//   console.log(`Product with ID ${productId} added to cart. Total items: ${this.cartItems.length}`);
//   alert(`محصول با آیدی ${productId} به سبد خرید اضافه شد.`);
//   }
// }





// // export class PublicProductsComponent {

// // }
// import { Component, inject, OnInit } from '@angular/core';

// import { ProductsService } from '../../../../+shared/services/products.service';
// import { Product } from '../../../../+shared/models/product.model';
// import { ProductComponent } from "./product/product.component";
// // import { ProductComponent } from "./product/product.component";

// @Component({
//   selector: 'app-products',
//   imports: [ProductComponent],
//   templateUrl: './public-products.component.html',
//   styleUrls: ['./public-products.component.scss']
// })
// export class PublicProductsComponent  {
//   productsService = inject(ProductsService);
//   product = this.productsService.list();
//   // products: Product[] = [];



//   // ngOnInit(): void {
//   //   this.productsService.fetchProducts().subscribe((data) => {
//   //     this.products = data;
//   //   });
//   // }

//   // handleAddToCart(product: Product): void {
//   //   console.log('محصول به سبد اضافه شد:', product);
//   // }
// }

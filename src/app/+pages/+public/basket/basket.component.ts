// import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { BasketService } from '../../../+shared/services/basket.service';
// import { Observable, Subscription } from 'rxjs';
// import { Product } from '../../../+shared/models/product.model';
// import { NgIf } from '@angular/common';
// import { NgFor } from '@angular/common';
// import { AsyncPipe } from '@angular/common';
// import { ProductComponent } from "../public-products/ui/product/product.component";

// @Component({
//   selector: 'app-basket',
//   imports: [
//     NgIf,
//     NgFor,
//     AsyncPipe,

// ],
//   templateUrl: './basket.component.html',
//   styleUrl: './basket.component.scss'
// })

// export class BasketComponent implements OnInit, OnDestroy {
//   private basketService = inject(BasketService);

//   // استفاده از async pipe در HTML روش ترجیحی است
//   cartItems$: Observable<Product[]> | undefined;
//   totalPrice: number = 0;

//   private totalSubscription: Subscription | undefined;

//   ngOnInit(): void {
//     // 1. دریافت Observable اصلی برای نمایش لیست
//     this.cartItems$ = this.basketService.cart$;

//     // 2. اشتراک برای محاسبه مجموع قیمت (به صورت جداگانه برای حفظ سادگی async pipe در HTML)
//     this.totalSubscription = this.cartItems$.subscribe(items => {
//       this.totalPrice = items.reduce((sum, item) => sum + item.price, 0);
//     });
//   }

//   // رویداد حذف محصول
//   handleRemove(productId: number): void {
//     this.basketService.removeProduct(productId);
//     // در این حالت، چون Observable به خودی خود تغییرات را منعکس می‌کند، نیازی به آپدیت دستی نیست.
//   }

//   // پاک کردن کل سبد
//   clearBasket(): void {
//     this.basketService.clearCart();
//   }

//   ngOnDestroy(): void {
//     // لغو اشتراک‌ها
//     this.totalSubscription?.unsubscribe();
//   }
// }

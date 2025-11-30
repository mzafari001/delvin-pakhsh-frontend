import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';




@Component({
  selector: 'app-baner',
  imports: [
    MatCardModule,
    MatIconModule,
    NgStyle,
    AsyncPipe


  ],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BanerComponent implements OnInit {

  banners: BannerItem[] = [
    {
      id:1,
      imageUrl : 'images/banner1.jpg',
      title: 'تازه‌ترین محصولات',
      subtitle: 'کیفیت بالا، قیمت رقابتی',
      link: '/products/fresh'
    },
    {
      id :2,
      imageUrl: 'images/banner2.jpg',
      title: 'فروش ویژه پروتئینی',
      subtitle: 'تخفیف ۲۰ درصدی برای اعضا',
      link: '/products/meat'
    }
    // {
    //   imageUrl: '/images/banner3.jpg',
    //   title: 'خرید امن و آسان',
    //   subtitle: 'درگاه پرداخت مطمئن و پشتیبانی ۲۴ ساعته',
    //   link: '/about/contact'
    // }
  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // تنظیم خودکار تعویض اسلاید (مثلاً هر ۵ ثانیه)
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  // تابع رفتن به اسلاید بعدی
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  // تابع رفتن به اسلاید قبلی
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  // تابع رفتن به یک اسلاید خاص بر اساس ایندکس
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
  //   private breakpointObserver = inject(BreakpointObserver);

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
    private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}


interface BannerItem {
  id:number;
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
}

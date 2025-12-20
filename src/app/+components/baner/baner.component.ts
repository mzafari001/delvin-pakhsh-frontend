import { Component, inject } from '@angular/core';
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
  styleUrl: './baner.component.scss'
})
export class BanerComponent implements OnInit{

  banners: BannerItem[] = [
    {
      id:1,
      imageUrl : 'images/banner1.jpg',
      title: 'تازه‌ترین محصولات',
      subtitle: 'کیفیت بالا، قیمت رقابتی',
      link: '/#'
    },
    {
      id :2,
      imageUrl: 'images/banner2.jpg',
      title: 'فروش ویژه پروتئینی',
      subtitle: 'تخفیف ۲۰ درصدی برای اعضا',
      link: '/#'
    }

  ];

  currentIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

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

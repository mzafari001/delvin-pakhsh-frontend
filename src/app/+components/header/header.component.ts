import { Component, OnInit, OnDestroy, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDivider } from "@angular/material/divider";
import { MatNavList } from "@angular/material/list";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AsyncPipe,
    RouterLink,
    MatDivider,
    MatNavList
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // 3. مدیریت وضعیت سایدمنو
  isMobileMenuOpen: boolean = false;

  // Reference به sidenav برای کنترل مستقیم
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // 4. Subject برای مدیریت لغو اشتراک‌ها (جلوگیری از Memory Leak)
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // اگر نیاز به اجرای عملیاتی پس از تغییر اندازه داشتید، اینجا مشترک شوید:
    this.isHandset$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isHandset => {
      // مثال: اگر از حالت موبایل به دسکتاپ رفت، مطمئن شویم منو بسته است
      if (!isHandset) {
        this.isMobileMenuOpen = false;
      }
    });
  }

  // 5. تابع تغییر وضعیت منوی موبایل
  mobileMenuToggle(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    // استفاده از toggle سایدناو به جای تغییر مستقیم state
    // این روش باعث می‌شود Angular Material رویدادها را به درستی مدیریت کند
    if (this.sidenav) {
      this.sidenav.toggle();
      this.isMobileMenuOpen = this.sidenav.opened;
    } else {
      // fallback در صورت عدم وجود sidenav
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
  handleMenuClosed(): void {
    this.isMobileMenuOpen = false;
  }
  
  handleMenuOpened(): void {
    this.isMobileMenuOpen = true;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

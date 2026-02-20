import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatNavList } from "@angular/material/list";
import { MatBadgeModule } from '@angular/material/badge';
import { BasketService } from '../../+shared/services/basket.service';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AsyncPipe,
    RouterLink,
    MatBadgeModule,
    MatNavList
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  basketService = inject(BasketService);
  cartCount = this.basketService.count;

  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isMobileMenuOpen: boolean = false;

  mobileMenuToggle(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

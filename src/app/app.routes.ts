import { Routes } from '@angular/router';
import { PublicNavigationComponent } from './+navigations/public-navigation/ui/public-navigation.component';
import { PublicHomeComponent } from './+pages/+public/public-home/ui/public-home.component';
import { PublicAboutComponent } from './+pages/+public/public-about/ui/public-about.component';
import { PrivateNavigationComponent } from './+navigations/private-navigation/ui/private-navigation.component';
import { PrivateDashboardComponent } from './+pages/+private/private-dashboard/ui/private-dashboard.component';
import { PrivateProductsComponent } from './+pages/+private/private-products/ui/private-products.component';
import { LoginComponent } from './+pages/+public/login/ui/login.component';
import { privateGuard } from './+pages/+private/guards/private.guard';
import { PublicProductsComponent } from './+pages/+public/public-products/ui/public-products.component';
import { BasketComponent } from './+pages/+public/basket/basket.component';
import { RegisterComponent } from './+pages/+public/register/ui/register.component';

export const routes: Routes = [
  {
    path: 'public', component: PublicNavigationComponent, children: [
      { path: 'home', component: PublicHomeComponent },
      { path: 'about', component: PublicAboutComponent },
      { path: 'products', component: PublicProductsComponent },
      { path: 'basket', component: BasketComponent },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' }
    ]
  },
  {
    path: 'admin', canActivate: [privateGuard], component: PrivateNavigationComponent, children: [
      { path: 'dashboard', component: PrivateDashboardComponent },
      { path: 'privateProducts', component: PrivateProductsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    ]
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

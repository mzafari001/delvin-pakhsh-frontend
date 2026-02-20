import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    MatCardModule,
    AsyncPipe

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private breakpointObserver = inject(BreakpointObserver);

  private _isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public get isHandset$(): Observable<boolean> {
    return this._isHandset$;
  }
  public set isHandset$(value: Observable<boolean>) {
    this._isHandset$ = value;
  }

}
// import { Component, OnInit } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms'; // برای FormsModule
// import { RouterLink } from '@angular/router'; // برای RouterLink که کشف کردید
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { CommonModule } from '@angular/common';

// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { AsyncPipe } from '@angular/common';
// import { map, Observable, shareReplay } from 'rxjs';


// // مدل ساده برای داده های ثبت نام
// interface RegisterData {
//   fullName?: string;
//   username?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,         // ایمپورت برای ngModel
//     RouterLink,          // ایمپورت برای routerLink
//     MatCardModule,
//     MatInputModule,
//     MatButtonModule,
//     AsyncPipe,
//     MatIconModule,
//     MatProgressSpinnerModule
//   ],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   registerData: RegisterData = {};
//   message: string = '';
//   busy: boolean = false;

//   // برای استایل ریسپانسیو
//   // 1. تعریف متغیر نهایی
//   isHandset$: Observable<boolean>;

//   // 2. تزریق و مقداردهی اولیه در سازنده
//   constructor(private breakpointObserver: BreakpointObserver) {

//     // 3. مقداردهی اولیه متغیر در اینجا، پس از اطمینان از تزریق شدن
//     this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
//       .pipe(
//         map(result => result.matches)
//       );
//   }


//   ngOnInit(): void {
//     // مقداردهی اولیه اگر لازم است
//   }

//   /**
//    * تابع اعتبارسنجی سفارشی برای تطابق رمزهای عبور
//    * این اعتبارسنجی را به سطح فرم اعمال می کنیم (Cross-Field Validation)
//    */
//   validatePasswords(form: NgForm) {
//     const password = form.value.password;
//     const confirmPassword = form.value.confirmPassword;

//     if (password && confirmPassword && password !== confirmPassword) {
//       // اگر رمزها برابر نبودند، یک خطا به سطح فرم اضافه می کنیم
//       form.control.setErrors({ 'mismatch': true });
//     } else {
//       // اگر برابر بودند یا خالی بودند، خطا را پاک می کنیم
//       form.control.setErrors(null);
//     }
//   }

//   onSubmit(form: NgForm) {
//     // 1. ابتدا اعتبارسنجی تطابق رمزها را انجام می دهیم
//     this.validatePasswords(form);

//     // 2. بررسی نهایی وضعیت فرم پس از اعتبارسنجی
//     if (form.invalid) {
//       this.message = 'لطفاً تمامی فیلدها را به درستی پر کنید.';
//       return; // توقف اجرای تابع در صورت نامعتبر بودن فرم
//     }

//     this.busy = true;
//     this.message = '';

//     // 3. منطق اصلی ثبت نام
//     console.log('داده های ارسالی برای ثبت نام:', this.registerData);

//     // ** اینجا باید فراخوانی API برای ثبت نام کاربر انجام شود **

//     setTimeout(() => {
//       this.busy = false;
//       // مثال: در صورت موفقیت
//       this.message = `ثبت نام موفقیت آمیز بود! خوش آمدید ${this.registerData.fullName}.`;

//       // می توانید کاربر را به صفحه لاگین یا داشبورد هدایت کنید
//       // this.router.navigate(['/login']);

//       // فرم را ریست کنید (اختیاری)
//       form.resetForm();
//     }, 2000);
//   }
// }


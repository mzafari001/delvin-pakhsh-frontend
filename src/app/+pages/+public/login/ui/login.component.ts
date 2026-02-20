import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { map, Observable, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from "@angular/material/button";
import { Login } from '../../../../+shared/models/login.model';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../../+shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoginResult } from '../../../../+shared/models/login_result';
@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    RouterLink,
    AsyncPipe,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButton,
    FormsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  busy = false;
  login: Login = { username: '', password: '', keepMe: false };
  message: string = '';
  check() {
    this.busy = true;
    this.auth.check(this.login.username, this.login.password).subscribe(r => {
      const result = r as LoginResult ;
      //reult ro tabdil mikone be Loginresult
      if (!result.successfull) {
        this.message = result.message;

      }
      else {
        sessionStorage.setItem('token' , result.token);

        if (this.login.keepMe) {
          //تنظیم من را بخاطر بسپار
          localStorage.setItem('token',result.token);
        }
        this.router.navigate(['/admin']);
      }

      this.busy = false;


    });
  }


  isValid() {

    if (this.login.username.trim() == '' || this.login.password == '') {
      return false;
    }
    return true;

  }

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

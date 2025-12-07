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
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
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
  message:string='';
  chek() {
    this.busy = true;
    let result = this.auth.check(this.login.username, this.login.password);
    result.subscribe(r => {
      if (r) {
        this.router.navigateByUrl('admin');
      }
      else {
        this.message="اشتباه"
        console.log(this.message);
      }
      this.busy=false;
    })
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

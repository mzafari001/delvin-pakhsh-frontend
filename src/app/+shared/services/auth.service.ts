import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.login';
import { delay, of } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //دیکه به اچ تی تی پب اعلام وابستگی نمیکنیم
  //به بک اند سرویس اعلام وابستگی میکنیم
  backend = inject(BackendService);
  check(username: string, password: string) {
    return this
      .backend
      .post('/api/v1/auth/login', { username: username, password: password });
      //dorostesh in bod 1 dto baray usernam  va password bala doro mikardim
      //baraye amniyat bayad casting anjam she daghighe 50


  }
}

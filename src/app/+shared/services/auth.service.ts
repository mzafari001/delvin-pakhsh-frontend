import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.login';
import { delay, of } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backend = inject(BackendService);
  check(username: string, password: string) {
    return this
      .backend
      .post('/api/v1/auth/login', { username: username, password: password });

  }
}

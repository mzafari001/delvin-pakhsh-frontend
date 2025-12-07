import { Injectable } from '@angular/core';
import { User } from '../models/user.login';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockUsers:User[]=[
    {username:'admin',password:'admin',fullname:'adminstrator',enabled:true},
    {username:'guest', password:'guest', fullname:'guest', enabled:true},
    {username:'user', password:'user', fullname:'user', enabled:false}
  ];
  check(username:string , password:string)
  {
    let success=true;
    let result=this.mockUsers.filter(r=>r.username==username && r.password==password && r.enabled==true);
    if (result.length==0) {
      success=false;
    }
    return of(success).pipe(delay(1000));
  }
}

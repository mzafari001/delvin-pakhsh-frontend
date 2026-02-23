import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {
  let  token=sessionStorage.getItem('toke');
  if (token==undefined) {
    token=localStorage.getItem('token');
    if (token!=undefined){
      sessionStorage.setItem('token',token);
      return true;
    }
  }
    else{
      return true;
    }

  const router=inject(Router);
  router.navigate(['login']);
  return false;
};

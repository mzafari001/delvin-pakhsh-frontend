import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  http = inject(HttpClient);
  post(api: string, data: any) {
    return this.http.post(environment.server + api, data).pipe(delay(environment.fakedelay));
  }
  get(api: string) {
    return this.http.get(environment.server + api).pipe(delay(environment.fakedelay));

  }
    put (api:string ,data:any){
    return this.http.put(environment.server+api, data).pipe(delay(environment.fakedelay));

  }
  delete (api:string){
    return this.http.delete(environment.server+api).pipe(delay(environment.fakedelay));

  }

}

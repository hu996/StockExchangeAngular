import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myToken:any={token:localStorage.getItem('eToken')}

    if(localStorage.getItem('eToken') !=null){
      request=request.clone({
        setHeaders:{
            token:myToken
        }
      });
    }
    return next.handle(request);
  }
}

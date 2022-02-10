import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenServ: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('/api')) {

      const bearerToken = 'Bearer ' + this.tokenServ.getToken()

      const newHeaders = request.headers.append('Authorization', bearerToken)
      const cloneRequest = request.clone({ headers: newHeaders})
      return next.handle(cloneRequest)
    }

    return next.handle(request);
  }
}

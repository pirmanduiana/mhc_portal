import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApicomInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const api_token = JSON.parse(localStorage.getItem('login_data') || '{}').api_token;
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + api_token)
        });

        return next.handle(request);
    }
}

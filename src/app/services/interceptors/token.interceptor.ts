import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes('/login')) {
            const token = localStorage.getItem('token');
            if(token){
                const tokenDecodificado = JSON.parse(window.atob(token));
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${tokenDecodificado}`
                    }
                });
            }
           
        }
        return next.handle(request);
    }
}

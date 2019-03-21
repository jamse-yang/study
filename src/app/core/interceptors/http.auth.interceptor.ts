import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JwtService} from '../services';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken();

    if (!token) {
      this.router.navigateByUrl('/');
    }
    const request = req.clone();
    return next.handle(request);
  }
}

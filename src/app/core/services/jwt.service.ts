import { Injectable } from '@angular/core';
import {User} from '../models';

@Injectable()
export class JwtService {

  getToken(): string {
    return window.localStorage.getItem('userInfo');
  }

  saveToken(user: User) {
    window.localStorage.setItem('userInfo', user.userName.concat(' / ', user.age));
  }

  destroyToken() {
    window.localStorage.removeItem('userInfo');
  }
}

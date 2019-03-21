import { Injectable } from '@angular/core';
import {JwtService} from './jwt.service';
import {User} from '../models';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  private currentUserSubject$ = new BehaviorSubject<User>({} as User);
  currentUser$ = this.currentUserSubject$.asObservable().pipe(distinctUntilChanged());

  constructor(
    private jwtService: JwtService,
    private router: Router,
  ) {}

  setAuth(user: User) {
    this.jwtService.saveToken(user);
    if (user) {
      this.currentUserSubject$.next(user);
    }
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject$.next({} as User);
    this.router.navigateByUrl('/');
  }

  attemptAuth(credentials: User) {
    const tempUser: User = credentials;
    this.setAuth(tempUser);
  }

  get currentUser(): User {
    return this.currentUserSubject$.value;
  }
}

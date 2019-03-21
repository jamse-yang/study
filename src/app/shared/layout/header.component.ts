import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../core';
import {User} from '../../core/models';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;
  isSubscribe = true;
  isLogin = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.setSubscribe();
  }

  setSubscribe() {
    this.userService.currentUser$.pipe(takeWhile(() => this.isSubscribe)).subscribe(authUser => {
      this.setAuthInfo(authUser);
    });
  }

  setAuthInfo(authUser: User): void {
    this.user = authUser;
    if (authUser.userName) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  logout() {
    if (confirm('로그아웃 하시겠습니까?')) {
      this.userService.purgeAuth();
    }
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

}

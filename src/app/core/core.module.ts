import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService, ChatService, DateService, JwtService, UserService
} from './services';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpAuthInterceptor} from './interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    ApiService,
    UserService,
    JwtService,
    DateService,
    ChatService,
  ]
})
export class CoreModule { }

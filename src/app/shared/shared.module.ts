import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';
import {
  SendMessageButtonComponent,
  LoginButtonComponent,
} from './buttons';

@NgModule({
  declarations: [
    SendMessageButtonComponent,
    LoginButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    SendMessageButtonComponent,
    LoginButtonComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }

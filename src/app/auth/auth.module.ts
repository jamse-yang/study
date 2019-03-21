import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }

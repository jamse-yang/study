import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {SharedModule} from '../shared/shared.module';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }

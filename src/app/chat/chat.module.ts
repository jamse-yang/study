import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import {SharedModule} from '../shared/shared.module';
import {ChatRoutingModule} from './chat-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
  ],
  declarations: [
    ChatComponent
  ]
})
export class ChatModule { }

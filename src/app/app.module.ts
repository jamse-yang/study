import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent, HeaderComponent} from './shared/layout';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {ChatModule} from './chat/chat.module';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    MainModule,
    ChatModule,
    AuthModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

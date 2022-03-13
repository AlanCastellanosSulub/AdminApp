import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenSessionInterceptor } from '@core/interceptors/token-session.interceptor';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [
    {
      useClass:TokenSessionInterceptor,
      provide:HTTP_INTERCEPTORS,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { ProductsModule } from './products/products.module';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenuModule,
    ProductsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

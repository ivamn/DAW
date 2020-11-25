import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import {FormsModule} from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

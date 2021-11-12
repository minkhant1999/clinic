import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { GuideComponent } from './components/guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    HomeComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

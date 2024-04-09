import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavBlankComponent } from './Components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './Components/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { OrderComponent } from './Components/order/order.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductsearchPipe } from './productsearch.pipe';
import { CreateorderComponent } from './createorder/createorder.component'
import { MyhttpInterceptor } from './myhttp.interceptor';
import { UpdatePriceComponent } from './Components/update-price/update-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    OrderComponent,
    NotfoundComponent,
    ProductsearchPipe,
    CreateorderComponent,
    UpdatePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //  {provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

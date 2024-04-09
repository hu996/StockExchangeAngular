import { UpdatePriceComponent } from './Components/update-price/update-price.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { authGuard } from './Shared/guards/auth.guard';

const routes: Routes = [

  {path:"",


  redirectTo:"home",pathMatch:"full"},

  {path:"",
  canActivate:[authGuard],
  component:BlankLayoutComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"order",component:OrderComponent},
    {path:"createorder",component:CreateorderComponent},
    {path:"updateprice",component:UpdatePriceComponent}
  ]},
  {path:"",component:AuthLayoutComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
  ]},
  {path:"**",component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

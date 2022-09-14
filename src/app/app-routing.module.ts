import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListProductComponent} from "./list-product/list-product.component";

import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./auth/guard/auth.guard";

const routes: Routes = [
  {path: '', redirectTo :'auth/login', pathMatch:'full'},
  {path : 'products', component : ListProductComponent, canActivate: [AuthGuard]},
  {path : 'signup', component : SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

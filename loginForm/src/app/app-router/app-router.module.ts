import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SuccessComponent } from '../success/success.component';

const appRoute:Routes=[
 {path:'login',component:LoginComponent},
 {path:'success',component:SuccessComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  declarations: []
})
export class AppRouterModule { }

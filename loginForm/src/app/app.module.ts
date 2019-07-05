import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// components
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
//services
import { AuthService } from './auth.service';

//modules
import { FormsModule } from '@angular/forms';



const appRoute = [
  
  
  
  {
    path: 'success', component: SuccessComponent
  },
  {
    path: '', component: LoginComponent
  },

  
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { CalculateComponent } from './calculate/calculate.component';
import { GradeComponent } from './grade/grade.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    DisplayComponent,
    CalculateComponent,
    GradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

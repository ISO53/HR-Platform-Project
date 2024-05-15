import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainDesignComponent } from './main-design/main-design.component';
import { CartWithButtonComponent } from './cart-with-button/cart-with-button.component';
import { CartButtonlessComponent } from './cart-buttonless/cart-buttonless.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainDesignComponent,
    CartWithButtonComponent,
    CartButtonlessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

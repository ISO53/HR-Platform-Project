import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:PricesComponent}
    ]),
  ]
})
export class PricesModule { }

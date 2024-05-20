import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './policies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:PoliciesComponent}
    ])
  ]
})
export class PoliciesModule { }

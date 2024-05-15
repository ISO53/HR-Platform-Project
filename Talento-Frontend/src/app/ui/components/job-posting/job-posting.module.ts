import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting.component';
import { RouterModule } from '@angular/router';
import { JobpostCartComponent } from './jobpost-cart/jobpost-cart.component';
import { OptionsCartComponent } from './options-cart/options-cart.component';



@NgModule({
  declarations: [
    JobPostingComponent,
    JobpostCartComponent,
    OptionsCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobPostingComponent}
    ]),
  ]
})
export class JobPostingModule { }

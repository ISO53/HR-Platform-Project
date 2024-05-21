import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobDetailsComponent}
    ]),
  ]
})
export class JobDetailsModule { } 

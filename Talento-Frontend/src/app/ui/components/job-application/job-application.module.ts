import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from './job-application.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobApplicationComponent}
    ]),
  ]
})
export class JobApplicationModule { }

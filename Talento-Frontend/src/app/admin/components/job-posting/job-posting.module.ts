import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting.component';
import { RouterModule } from '@angular/router';
import { JobpostingCardComponent } from './jobposting-card/jobposting-card.component';



@NgModule({
  declarations: [
    JobPostingComponent,
    JobpostingCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobPostingComponent}
    ]),
  ]
})
export class JobPostingModule { }

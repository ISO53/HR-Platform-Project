import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting.component';
import { RouterModule } from '@angular/router';
import { JobpostingCardComponent } from './jobposting-card/jobposting-card.component';
import { JobCreateComponent } from './job-create/job-create.component';



@NgModule({
  declarations: [
    JobPostingComponent,
    JobpostingCardComponent,JobCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobPostingComponent},
      {path:"create",component:JobCreateComponent}

    ]),
  ]
})
export class JobPostingModule { }

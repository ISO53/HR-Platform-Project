import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting.component';
import { RouterModule } from '@angular/router';
import { JobpostingCardComponent } from './jobposting-card/jobposting-card.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';



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
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule
  ]
})
export class JobPostingModule { }

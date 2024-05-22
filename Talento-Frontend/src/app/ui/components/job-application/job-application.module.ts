import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from './job-application.component';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobApplicationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:"",component:JobApplicationComponent}
    ]),
    FileUploadModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule
  ]
})
export class JobApplicationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostingComponent } from './job-posting.component';
import { RouterModule } from '@angular/router';
import { JobpostCartComponent } from './jobpost-cart/jobpost-cart.component';
import { OptionsCartComponent } from './options-cart/options-cart.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



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
    MatSidenavModule,
    MatCardModule, 
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class JobPostingModule { }

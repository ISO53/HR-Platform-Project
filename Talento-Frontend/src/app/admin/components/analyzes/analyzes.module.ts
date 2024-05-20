import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzesComponent } from './analyzes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AnalyzesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AnalyzesComponent}
    ]),
  ]
})
export class AnalyzesModule { }

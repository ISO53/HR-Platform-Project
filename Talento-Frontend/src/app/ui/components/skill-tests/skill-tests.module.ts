import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTestsComponent } from './skill-tests.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SkillTestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:SkillTestsComponent}
    ])
  ]
})
export class SkillTestsModule { }

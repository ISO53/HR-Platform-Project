import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTestsComponent } from './skill-tests.component';
import { RouterModule } from '@angular/router';
import { SkilltestCardComponent } from './skilltest-card/skilltest-card.component';



@NgModule({
  declarations: [SkillTestsComponent, SkilltestCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:SkillTestsComponent}
    ]),
  ]
})
export class SkillTestsModule { }

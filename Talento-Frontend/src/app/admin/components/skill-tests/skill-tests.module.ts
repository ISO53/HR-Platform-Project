import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTestsComponent } from './skill-tests.component';
import { RouterModule } from '@angular/router';
import { SkilltestCardComponent } from './skilltest-card/skilltest-card.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SkillTestsComponent, SkilltestCardComponent, CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:SkillTestsComponent},
      {path:"create",component:CreateComponent}
    ]),
  ]
})
export class SkillTestsModule { }

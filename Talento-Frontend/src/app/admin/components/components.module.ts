import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { SkillTestsModule } from './skill-tests/skill-tests.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    SkillTestsModule
  ]
})
export class ComponentsModule { }

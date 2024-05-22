import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { SkillTestsModule } from './skill-tests/skill-tests.module';
import { AnalyzesModule } from './analyzes/analyzes.module';
import { ApplicationModule } from './application/application.module';
import { CalendarModule } from './calendar/calendar.module';
import { PoliciesModule } from './policies/policies.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    SkillTestsModule,
    AnalyzesModule,
    ApplicationModule,
    CalendarModule,
    PoliciesModule
  ]
})
export class ComponentsModule { }

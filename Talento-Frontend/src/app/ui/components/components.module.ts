import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { JobPostingModule } from './job-posting/job-posting.module';
import { LogInModule } from './log-in/log-in.module';
import { PricesModule } from './prices/prices.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { JobApplicationModule } from './job-application/job-application.module';
import { JobDetailsModule } from './job-details/job-details.module';
import { SkillTestsModule } from './skill-tests/skill-tests.module';



@NgModule({
  declarations: [
    
  
    
  ],
  imports: [
    CommonModule,
    HomeModule,
    UsersModule,
    JobPostingModule,
    LogInModule,
    PricesModule,
    SignUpModule,
    JobApplicationModule,
    JobDetailsModule,
    SkillTestsModule
  ]
})
export class ComponentsModule { }

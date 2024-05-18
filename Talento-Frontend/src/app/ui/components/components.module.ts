import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { JobPostingModule } from './job-posting/job-posting.module';
import { LogInModule } from './log-in/log-in.module';
import { PricesModule } from './prices/prices.module';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    UsersModule,
    JobPostingModule,
    LogInModule,
    PricesModule
  ]
})
export class ComponentsModule { }

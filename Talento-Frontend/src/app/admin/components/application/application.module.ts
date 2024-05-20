import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';



@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CalendarComponent}
    ]),
  ]
})
export class ApplicationModule { }

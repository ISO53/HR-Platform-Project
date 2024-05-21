import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { AppCardComponent } from './app-card/app-card.component';



@NgModule({
  declarations: [
    ApplicationComponent,
    AppCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ApplicationComponent}
    ]),
  ]
})
export class ApplicationModule { }

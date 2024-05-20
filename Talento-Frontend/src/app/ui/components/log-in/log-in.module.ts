import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LogInComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: "", component: LogInComponent}
        ]),
        FormsModule,
    ]
})
export class LogInModule { }

import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,

    ]
})
export class DashboardModule { }

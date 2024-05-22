import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    BrowserModule
  ]
})
export class DashboardModule {
}

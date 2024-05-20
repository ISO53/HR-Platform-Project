import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [SignUpComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: "", component: SignUpComponent}]),
        FormsModule
    ]
})
export class SignUpModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTestsComponent } from './skill-tests.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    SkillTestsComponent,
    TestComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:SkillTestsComponent},
      {path:"test",component:TestComponent}
    ])
  ]
})
export class SkillTestsModule { }

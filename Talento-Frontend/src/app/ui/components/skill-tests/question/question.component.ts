import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: string;
  @Input() answer1:string;
  @Input() answer2:string;
  @Input() answer3:string;
  @Input() answer4:string;
  @Input() answer5:string;

}

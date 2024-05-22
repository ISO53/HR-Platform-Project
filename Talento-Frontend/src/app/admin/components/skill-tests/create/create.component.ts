import { Component } from '@angular/core';
import { FormGroup,  } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent{
  mcqForm: FormGroup;
  cards: any[] = [];
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct: any;
  /*
  cards : any = [{
    question:"",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "dogru"
   }]*/
  constructor() {

    
  }

  run(): void {
      const data= {
        question:this.question,
        answer1: this.option1,
        answer2: this.option2,
        answer3: this.option3,
        answer4: this.option4,
        correct: this.correct
       }
       console.log(data);
       
       console.log(this.question);
       
      this.cards.push(data);
      // Create a new FormGroup for the next question
      
    
  }
}

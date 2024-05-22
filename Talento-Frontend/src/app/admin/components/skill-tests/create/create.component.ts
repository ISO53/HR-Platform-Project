import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  mcqForm: FormGroup;
  cards: any[] = [];
  /*
  cards : any = [{
    question:"",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "dogru"
   }]*/
  constructor(private fb: FormBuilder) {
    this.mcqForm = this.fb.group({
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correct: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.mcqForm.valid) {
      this.cards.push(this.mcqForm.value);
      // Create a new FormGroup for the next question
      this.mcqForm = this.fb.group({
        question: ['', Validators.required],
        option1: ['', Validators.required],
        option2: ['', Validators.required],
        option3: ['', Validators.required],
        option4: ['', Validators.required],
        correct: ['', Validators.required]
      });
    }
  }
}

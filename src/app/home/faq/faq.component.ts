import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  questions = [
    'How to Buy meal',
    'How to Cook meal',
    'How to Customize meal',
    'How to Buy meal',
    'How to Cook meal',
    'How to Customize meal',
    'How to Buy meal',
    'How to Cook meal',
    'How to Customize meal',
    'How to Customize meal',
  ];

  answers = [
    'Answer 1',
    'Answer 2',
    'Answer 3',
    'Answer 1',
    'Answer 2',
    'Answer 3',
    'Answer 1',
    'Answer 2',
    'Answer 1',
    'Answer 2',
    'Answer 3',
  ];
  constructor() { }

  ngOnInit() {
    // Initialize the selected question to the first question
    this.selectQuestion(0);
  }

  selectedQuestionIndex: number = -1;
  selectedAnswer: string = '';

  selectQuestion(index: number) {
    this.selectedQuestionIndex = index;
    this.selectedAnswer = this.answers[index];
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  questions = [
    'What is the process for leaving feedback or reviews on purchased items?',
    'How do I create an account on ASAP?',
    'What payment methods are accepted here?',
    'Are there any ongoing promotions or discounts?',
    'Is my personal and payment information secure on this platform?',
    'What is the process for tracking my order?' ,
    'Can I sell my own products ASAP?' ,
    'Is there a customer support contact for any issues I might encounter?',
    'Are customer reviews and ratings reliable indicators of product quality?' ,
    'Are there any restrictions on the quantity of items I can purchase?' ,
    'Do you offer gift wrapping or personalised messages for purchases?',
    "Can I cancel an order after it'\s' been placed?",
    'Are there any rewards or loyalty programs for frequent shoppers?',
    'How can I update my delivery address or account information?',
    'What happens if my package is lost or damaged during delivery?',
    'Do you have a mobile app for easier shopping?',
  ];

  answers = [
    'Answer 1',
    'Answer 1',
    'Answer 1',
    'Answer 1',
    'Answer 1',
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

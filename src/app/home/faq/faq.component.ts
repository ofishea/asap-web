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
    'Is there a customer support contact for any issues I might encounter?',
    'Are customer reviews and ratings reliable indicators of product quality?' ,
    "Can I cancel an order after it'\s' been placed?",
    'Are there any rewards or loyalty programs for frequent shoppers?',
    'How can I update my delivery address or account information?',
    'What happens if my package is lost or damaged during delivery?',
    'Do you have a mobile app for easier shopping?',
  ];

  answers = [
    'Visit the product page, click on "Write a Review", then share your thoughts with us.',
    'Click on the "Sign Up" button, fill the form, verify email, set a good password, then start shopping.',
    'Your Debit cards, and other digital wallets are accepted.',
    'Check "Promotions" section for current discounts, deals, and ongoing promotions.',
    'Stringent security measures ensure your personal and payment data protection.',
    'Use order ID to track the status of item(s) in "Order Tracking Section".',
    'Yes, kindly contact our customer support for assistance with any encountered issues.',
    'Yes, customer reviews and ratings provide valuable insights into product quality.',
    'Cancellation is possible before delivery; check "Order History" for options available.',
    'Absolutely! We offer coupons and rewards for our loyal shoppers.',
    'Easily update delivery/address or account information in "Account Settings" section.',
    'Contact us if package is lost or damaged for assistance.',
    'Yes, download our mobile app either on IOS or Google play store for a convenient shopping experience.',
   
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

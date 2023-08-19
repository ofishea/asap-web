import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent  implements OnInit {
  changingTextIndex: number = 0;
  changingTexts: string[] = ['FOOD', 'GROCERIES', 'GAS', 'LAUNDRY'];
  typingClass: string = '';

  constructor() { }

  ngOnInit() {
    this.rotateChangingText();
  }

  rotateChangingText() {
    setInterval(() => {
      this.typingClass = 'typing';
      setTimeout(() => {
        this.changingTextIndex = (this.changingTextIndex + 1) % this.changingTexts.length;
        this.typingClass = '';
      }, 2000);
    }, 4000);
  }

  get currentChangingText(): string {
    return this.changingTexts[this.changingTextIndex];
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor() { }

  slideIndex = [1, 1];
  slideId = ["mySlides1", "mySlides2"];

  ngOnInit() {
    this.showSlides(1, 0);
    this.showSlides(1, 1);
  }

  plusSlides(n: number, no: number) {
    this.showSlides(this.slideIndex[no] += n, no);
  }

  showSlides(n: number, no: number) {
    const x = document.getElementsByClassName(this.slideId[no]) as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
      this.slideIndex[no] = 1;
    }
    if (n < 1) {
      this.slideIndex[no] = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none"; // Hide all slides
    }
    x[this.slideIndex[no] - 1].style.display = "block"; // Display the current slide
  }
}

import { Component, Input, OnInit } from '@angular/core';

interface CarouselItem {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  @Input() carouselData: CarouselItem[] = [];
  @Input() cols!: number;

  offset = 0;
  activeIndex = 0;
  touchStartX = 0;
  touchEndX = 0;
  isHovering = false;

  constructor() {}

  ngOnInit() {}

  nextSlide() {
    const carouselWidth = document.querySelector('.carousel')?.clientWidth || 0;
    const slideWidth = carouselWidth / this.cols;
    const maxOffset = (this.carouselData.length - this.cols) * slideWidth;
    const nextOffset = this.offset + carouselWidth;
    if (nextOffset <= maxOffset) {
      this.offset = nextOffset;
      this.activeIndex++;
    } else {
      this.offset = 0;
      this.activeIndex = 0;
    }
  }

  prevSlide() {
    const carouselWidth = document.querySelector('.carousel')?.clientWidth || 0;
    const slideWidth = carouselWidth / this.cols;
    const prevOffset = this.offset - carouselWidth;
    if (prevOffset >= 0) {
      this.offset = prevOffset;
      this.activeIndex--;
    } else {
      const maxOffset = (this.carouselData.length - this.cols) * slideWidth;
      this.offset = maxOffset;
      this.activeIndex = this.carouselData.length - this.cols;
    }
  }

  goToSlide(index: number) {
    const carouselWidth = document.querySelector('.carousel')?.clientWidth || 0;
    const slideWidth = carouselWidth / this.cols;
    this.offset = index * slideWidth;
    this.activeIndex = index;
  }
  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    const deltaX = this.touchEndX - this.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }
  handleMouseEnter() {
    this.isHovering = true;
  }

  handleMouseLeave() {
    this.isHovering = false;
  }
}

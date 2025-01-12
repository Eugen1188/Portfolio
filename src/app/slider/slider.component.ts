import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  recommendations = [{
    message: 'loremLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
    author: 'Max',
  },
  {
    message: 'HAAAAAAALLLLLLOOOO',
    author: 'Marcel',
  },
  {
    message: 'JOOOOOOOOOOOO',
    author: 'Manuel',
  }];

  currentSlide: number = 1;

  moveSlider(direction: string) {
    if (direction === 'backward') {
      if (this.currentSlide == 1) {
        this.currentSlide = this.recommendations.length;
      } else {
        this.currentSlide = this.currentSlide - 1;
      }
    } else if (direction == 'forward') {
      if (this.currentSlide == this.recommendations.length) {
        this.currentSlide = 1;
      } else {
        this.currentSlide = this.currentSlide + 1;
      }
    }
  }

  moveToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  getSlideStyle(index: number) {
    const position = index + 1 - this.currentSlide;
    let translateX = position * 580;
    if (position == -this.recommendations.length + 1) {
      translateX = 580;
    }
    if (position == this.recommendations.length - 1) {
      translateX = -580;
    }
    return {
      transform: `translateX(${translateX}px)`,
    };
  }
}

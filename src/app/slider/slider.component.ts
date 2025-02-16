import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  language = inject(LanguageService);
  recommendations = [
    {
      message:
        'Eugen ist nicht nur technisch fit, sondern auch total unkompliziert. Es war immer angenehm, mit ihm zu arbeiten.',
      author: 'Max',
    },
    {
      message: 'Die Zusammenarbeit mit Eugen war super. Er hat immer den Überblick behalten und viele gute Ideen eingebracht.',
      author: 'Kosta',
    },
    {
      message: 'Eugen war eine große Hilfe im Team. Er hat sich immer voll reingehängt und seine Programmierfähigkeiten waren echt beeindruckend.',
      author: 'Waldemar',
    },
  ];

  currentSlide: number = 1;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getMultiplier(): number {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1200) {
        return 0.5;
      } else if (window.innerWidth > 950) {
        return 0.6;
      } else if (window.innerWidth > 850) {
        return 0.65;
      } else if (window.innerWidth > 800) {
        return 0.7;
      } else if (window.innerWidth > 600) {
        return 0.65;
      } else if (window.innerWidth > 500) {
        return 0.6;
      } else if (window.innerWidth > 390) {
        return 0.8;
      } else if (window.innerWidth > 350) {
        return 0.8;
      } else {
        return 0.88;
      }
    }
    return 0.9;
  }
  

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
    if (isPlatformBrowser(this.platformId)) {
      const container = document.querySelector('.slider-container');
      const containerWidth = container ? container.clientWidth : window.innerWidth;
      let dynamicWidth = containerWidth * this.getMultiplier();
      if(window.innerWidth > 1500){
        dynamicWidth = 760;
      }
      const position = index + 1 - this.currentSlide;
      let translateX = position * dynamicWidth;
  
      if (position == -this.recommendations.length + 1) {
        if(window.innerWidth > 1500){
          dynamicWidth = 760;
        }
        translateX = dynamicWidth;
      }
      if (position == this.recommendations.length - 1) {
        translateX = -dynamicWidth;
      }
      return {
        transform: `translateX(${translateX}px)`,
      };
    }
    return {
      transform: 'translateX(0px)',
    };
  }
}

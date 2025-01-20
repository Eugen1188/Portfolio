import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MarqueeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    @Input() language!: string; 
    
  
    ngOnInit() {
      console.log('LandingPage - Current language:', this.language);
    }
  

}

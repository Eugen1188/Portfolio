import { Component, inject } from '@angular/core';
import { MarqueeComponent } from "./marquee/marquee.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MarqueeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

    language = inject(LanguageService);
}

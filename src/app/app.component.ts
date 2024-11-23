import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { TechnologiesSectionComponent } from "./technologies-section/technologies-section.component";
import { PortfolioSectionComponent } from "./portfolio-section/portfolio-section.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, AboutMeSectionComponent, TechnologiesSectionComponent, PortfolioSectionComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { TechnologiesSectionComponent } from "./technologies-section/technologies-section.component";
import { PortfolioSectionComponent } from "./portfolio-section/portfolio-section.component";
import { SliderComponent } from "./slider/slider.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from "./landing-page/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
  language: string = 'eng';

  onLanguageChange(newLanguage: string): void {
    this.language = newLanguage;
  }
}
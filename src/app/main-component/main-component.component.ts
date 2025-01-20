import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { AboutMeSectionComponent } from "../about-me-section/about-me-section.component";
import { TechnologiesSectionComponent } from "../technologies-section/technologies-section.component";
import { PortfolioSectionComponent } from "../portfolio-section/portfolio-section.component";
import { SliderComponent } from "../slider/slider.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [LandingPageComponent, AboutMeSectionComponent, TechnologiesSectionComponent, PortfolioSectionComponent, SliderComponent, ContactComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {


}

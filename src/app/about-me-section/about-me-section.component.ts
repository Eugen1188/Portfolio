import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

  language = inject(LanguageService);

}

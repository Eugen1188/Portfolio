import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-technologies-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.scss'
})
export class TechnologiesSectionComponent {

  language = inject(LanguageService);

  skills: string[] = ["HTML", "CSS", "JavaScript", "Material Design", "Typescript", "Angular", "Firebase", "GIT", "Rest-Api", "Scrum", "Growth mindset"];

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, BigScreenComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss',
})
export class PortfolioSectionComponent {

  language = inject(LanguageService);
  hiddeBackground = inject(LanguageService);
  projects = [
    {
      portfolio: 'Join',
      tools: ['HTML', 'CSS', 'JavaScript'],
      descriptionEng: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      ],
      descriptionGer: [
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzern und Kategorien zu. ',
      ],
    },
    {
      portfolio: 'El Pollo Loco',
      tools: ['HTML', 'CSS', 'JavaScript'],
      descriptionEng: [
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
      ],
      descriptionGer: [
        'Springen, laufen und werfen – ein Spiel basierend auf dem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      ],
    },
    {
      portfolio: 'DA Bubble',
      tools: ['Angular', 'Firebase', 'TypeScript'],
      descriptionEng: [
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. ',
      ],
      descriptionGer: [
        'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Nachrichten und einer robusten Kanalorganisation.',
      ],
    },
  ];

  selectedIndex: number | any | null = null;
  isVisible = false;

  onDivClick(i: number) {
    this.isVisible = true;
    this.selectedIndex = i;
    this.hiddeBackground.isOpen = true;
    console.log('ondivclickindex' + this.selectedIndex);

  }

  visibilityChange(newVisibility: boolean) {
    this.isVisible = newVisibility;
  }

  renderIndex(index: number) {
    this.selectedIndex = index;
  }
}

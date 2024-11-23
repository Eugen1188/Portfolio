import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BigScreenComponent } from './big-screen/big-screen.component';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, BigScreenComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss',
})
export class PortfolioSectionComponent {
  projects = [
    {
      portfolio: 'Join',
      tools: ['HTML', 'CSS', 'JavaScript'],
      description: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      ],
    },
    {
      portfolio: 'El Pollo Loco',
      tools: ['HTML', 'CSS', 'JavaScript'],
      description: [
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
      ],
    },
    {
      portfolio: 'DA Bubble',
      tools: ['Angular', 'Firebase', 'TypeScript'],
      description: [
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. ',
      ],
    },
  ];

  selectedIndex: number | any | null = null;
  isVisible = false;

  onDivClick(i: number) {
    this.isVisible = true;
    this.selectedIndex = i;
    console.log('ondivclickindex' + this.selectedIndex);

  }

  visibilityChange(newVisibility: boolean) {
    this.isVisible = newVisibility;
  }

  renderIndex(index: number) {
    this.selectedIndex = index;
  }
}

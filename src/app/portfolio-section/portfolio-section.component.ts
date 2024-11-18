import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    { portfolio: 'Join', tools: ['Angular', 'TypeScript', 'HTML', 'CSS'], description: ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '] },
    { portfolio: 'El Pollo Loco', tools: ['HTML', 'CSS', 'JavaScript'], description: ['Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. '] },
    { portfolio: 'DA Bubble', tools: ['Angular', 'Firebase', 'TypeScript'], description: ['This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization. '] },
  ];

  selectedIndex: number | null = null;

  onDivClick(i: number): void {
    console.log('Auf das div mit Index ' + i + ' geklickt!');
    this.selectedIndex = i; // Setzt den Index für die Kindkomponente
  }

  onBigScreenTriggered(i: number): void {
    console.log('Das Event wurde empfangen! Der Index ist:', i);
  }
}

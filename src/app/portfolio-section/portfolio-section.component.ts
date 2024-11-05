import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

  users = [
    { projekte: 'Join', tools: ['Angular', 'TypeScript', 'HTML', 'CSS'] },
    { projekte: 'El Pollo Loco', tools: ['HTML', 'CSS', 'JavaScript' ] },
    { projekte: 'DA Bubble', tools: ['Angular', 'Firebase', 'TypeScript'] },
  ];

}

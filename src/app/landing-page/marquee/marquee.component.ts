import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {

  language = inject(LanguageService);

}

import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  language = inject(LanguageService);

}

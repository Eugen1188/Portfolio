import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  language = inject(LanguageService);
}

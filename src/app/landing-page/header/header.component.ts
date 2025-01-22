import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  language = inject(LanguageService);
  

  selectedLanguage: string = 'eng';

  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.language.language = lang;
    console.log(this.selectedLanguage);  }
}

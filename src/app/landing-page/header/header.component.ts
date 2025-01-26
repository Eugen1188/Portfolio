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
  isVisible:boolean = false;
  hiddeBackground = inject(LanguageService);
  scrollPosition: number = 0;



  selectedLanguage: string = 'eng';

  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.language.language = lang;
    console.log(this.selectedLanguage);  }

    closeScreen() {
      this.isVisible = false;
      this.hiddeBackground.isOpen = false;
      console.log(this.isVisible);
    }

    openMenu() {
      this.hiddeBackground.isOpen = true;
      this.isVisible = true;
      console.log(this.isVisible);
    }
}
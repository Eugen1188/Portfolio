import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
  
  // constructor() {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     let storedLanguage: string | null = localStorage.getItem("language");
  //     let storedLanguageBtn: string | null = localStorage.getItem("languageBtn");
  //     storedLanguageBtn = localStorage.getItem("languageBtn");
  //     storedLanguage = localStorage.getItem("language");
  //     if (storedLanguage && storedLanguageBtn) {
  //       this.selectedLanguage = storedLanguageBtn;
  //       this.language.language = storedLanguage;
  //     }
  //   }
  // }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      let storedLanguage: string | null = localStorage.getItem("language");
      let storedLanguageBtn: string | null = localStorage.getItem("languageBtn");
      storedLanguageBtn = localStorage.getItem("languageBtn");
      storedLanguage = localStorage.getItem("language");
      if (storedLanguage && storedLanguageBtn) {
        this.selectedLanguage = storedLanguageBtn;
        this.language.language = storedLanguage;
      }
    }
  }


  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.language.language = lang;
    localStorage.setItem("languageBtn", lang);
    localStorage.setItem("language", lang);

  }

  closeScreen() {
    this.isVisible = false;
    this.hiddeBackground.isOpen = false;
  }

    openMenu() {
      this.hiddeBackground.isOpen = true;
      this.isVisible = true;
    }
}




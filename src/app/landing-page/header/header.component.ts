import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  @Input() language: string = 'eng';
  @Output() languageChange = new EventEmitter<string>();

  selectedLanguage: string = 'eng';

  setLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.language = lang;
    console.log(this.selectedLanguage);
    this.languageChange.emit(this.language);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  language: string = 'eng';
  isOpen: boolean = false;
}

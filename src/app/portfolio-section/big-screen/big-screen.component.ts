import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-screen.component.html',
  styleUrl: './big-screen.component.scss'
})
export class BigScreenComponent {

  @Input() index: number | null = null;
  @Input() projects: any [] = [];
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  closeMainContainer() {
    this.isVisible = false;
    console.log('Kindkomponente' + this.isVisible);
    this.isVisibleChange.emit(this.isVisible);
    console.log('Main container geschlossen.');
    console.log(this.isVisible);

  }
}

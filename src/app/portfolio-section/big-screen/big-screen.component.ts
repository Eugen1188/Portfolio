import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-screen.component.html',
  styleUrl: './big-screen.component.scss',
})
export class BigScreenComponent {
  @Input() index: number | null = null;
  @Input() projects: any[] = [];
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() renderIndex = new EventEmitter<number>();

  renderNextProject() {
    if (this.index != null) {
      this.index = this.index + 1;
      if (this.index == this.projects.length) {
        this.index = 0;
      }
    }
  }

  closeScreen() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
    if (this.index != null) {
      this.renderIndex.emit(this.index);
    }
    console.log('closeindex' + this.index)
  }
}

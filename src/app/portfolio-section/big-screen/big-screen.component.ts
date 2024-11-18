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
  // @Output() triggerBigScreen = new EventEmitter<number>();
  @Input() projects: any [] = [];
  ngOnChanges() {
    if (this.index !== null) {
      this.triggerBigScreenMethod(this.index);
    }
  }

  triggerBigScreenMethod(i: number): void {
    console.log("Event in der Kindkomponente ausgelöst! Index:", i);
    // this.triggerBigScreen.emit(i);
    console.log(this.projects[i].portfolio + "HAllo") ;
    console.log(this.projects[i].tools) ;
  }


}

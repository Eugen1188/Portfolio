import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MarqueeComponent } from "./marquee/marquee.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

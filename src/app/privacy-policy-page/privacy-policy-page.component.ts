import { Component } from '@angular/core';
import { HeaderComponent } from "../landing-page/header/header.component";
import { PrivacyPolicyComponent } from "../privacy-policy/privacy-policy.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [HeaderComponent, PrivacyPolicyComponent, FooterComponent],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {

}

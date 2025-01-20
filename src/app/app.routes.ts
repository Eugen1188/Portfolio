import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'privacy_policy', component: PrivacyPolicyComponent },

  ];

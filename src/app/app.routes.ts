import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'privacy_policy', component: PrivacyPolicyComponent },
    { path: 'legal_notice', component: LegalNoticeComponent },
  ];

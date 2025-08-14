import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { PrivacyPolicyComponent } from './privacy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
  { path: '', component: PortfolioLayoutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, routerOptions),
      ToastrModule.forRoot({ positionClass: 'toast-top-center' })
    ),
  ],
};

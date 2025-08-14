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
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent,
    data: { title: 'Mohamad Salman | Portfolio' },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy | Mohamad Salman' },
  },
  {
    path: 'legal-notice',
    component: LegalNoticeComponent,
    data: { title: 'Legal Notice | Mohamad Salman' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 | Mohamad Salman' },
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120],
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

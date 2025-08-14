import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  isDE: boolean;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.isDE = this.languageService.getCurrentLanguage();
  }

  ngOnInit() {
    const sub = this.languageService.getLanguage().subscribe((value) => {
      this.isDE = value;
    });
    this.subscription.add(sub);
  }

  switchLanguage(de: boolean) {
    this.languageService.setLanguage(de);
  }

  goHome() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

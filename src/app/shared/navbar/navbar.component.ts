import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isPrivacyPolicy = false;
  isDE = true;

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isPrivacyPolicy = event.urlAfterRedirects === '/privacy-policy';
      });

    this.languageService.getLanguage().subscribe((de) => {
      this.isDE = de;
    });
  }

  setLanguage(de: boolean) {
    this.languageService.setLanguage(de);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

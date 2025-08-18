import { Component, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isRoute = false;
  @Input() isDE: boolean = true;

  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {
    this.isDE = this.languageService.getCurrentLanguage();

    const routeSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const urlWithoutFragment = event.urlAfterRedirects.split('#')[0];
        this.isRoute = urlWithoutFragment === '/';
      });

    const langSub = this.languageService.getLanguage().subscribe((de) => {
      this.isDE = de;
    });

    this.subscriptions.add(routeSub);
    this.subscriptions.add(langSub);
  }

  setLanguage(de: boolean) {
    this.languageService.setLanguage(de);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

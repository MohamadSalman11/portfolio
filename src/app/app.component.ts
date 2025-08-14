import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDE: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe((value) => {
      this.isDE = value;
      this.updateTitle(); // Update title on language change
    });

    // Update title on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  updateTitle() {
    let route = this.activatedRoute;
    while (route.firstChild) route = route.firstChild;

    const titleKey = route.snapshot.data['titleKey'] as
      | 'HOME'
      | 'PRIVACY'
      | 'LEGAL'
      | 'NOT_FOUND';

    if (!titleKey) return;

    const titlesDE = {
      HOME: 'Mohamad Salman | Portfolio',
      PRIVACY: 'Datenschutzerklärung | Mohamad Salman',
      LEGAL: 'Impressum | Mohamad Salman',
      NOT_FOUND: '404 | Mohamad Salman',
    };

    const titlesEN = {
      HOME: 'Mohamad Salman | Portfolio',
      PRIVACY: 'Privacy Policy | Mohamad Salman',
      LEGAL: 'Legal Notice | Mohamad Salman',
      NOT_FOUND: '404 | Mohamad Salman',
    };

    const title = this.isDE ? titlesDE[titleKey] : titlesEN[titleKey];
    this.titleService.setTitle(title);
  }
}

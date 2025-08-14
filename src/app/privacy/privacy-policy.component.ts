import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../language.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  isDE = true;

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.getLanguage().subscribe((value) => {
      this.isDE = value;
    });
  }

  switchLanguage(de: boolean) {
    this.isDE = de;
  }

  goHome(): void {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}

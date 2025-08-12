import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent],
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

  goHome(): void {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}

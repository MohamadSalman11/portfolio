import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isDE: boolean = true;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const sub = this.languageService.getLanguage().subscribe((value) => {
      this.isDE = value;
    });
    this.subscription.add(sub);
  }

  goHome() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() isDE!: boolean;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}

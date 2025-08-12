import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-portfolio-layout',
  imports: [MainComponent, FooterComponent],
  templateUrl: './portfolio-layout.component.html',
})
export class PortfolioLayoutComponent {}

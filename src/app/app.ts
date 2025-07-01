import { Component } from '@angular/core';
import { Footer } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'sakura';
}

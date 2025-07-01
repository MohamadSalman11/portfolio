import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MeComponent} from "./me/me.component"

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, MeComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}

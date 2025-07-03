import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, MeComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}

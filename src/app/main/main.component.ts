import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    NavbarComponent,
    MeComponent,
    SkillsComponent,
    ProjectsComponent,
    CoursesComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {}

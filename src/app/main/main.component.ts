import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MeComponent,
    SkillsComponent,
    ProjectsComponent,
    CoursesComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {
  isDE: boolean;
  private subscription = new Subscription();

  constructor(private languageService: LanguageService) {
    this.isDE = this.languageService.getCurrentLanguage();
  }

  ngOnInit() {
    const sub = this.languageService.getLanguage().subscribe((de) => {
      this.isDE = de;
    });
    this.subscription.add(sub);
  }

  setLanguage(de: boolean) {
    this.languageService.setLanguage(de);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() isDE!: boolean;
}

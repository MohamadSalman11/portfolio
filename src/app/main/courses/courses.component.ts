import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  @Input() isDE!: boolean;
}

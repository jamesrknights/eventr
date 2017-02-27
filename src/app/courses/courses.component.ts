import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl:'./courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: []
})

export class CoursesComponent {

  title = 'Courses Homepage';
  courses;

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

}
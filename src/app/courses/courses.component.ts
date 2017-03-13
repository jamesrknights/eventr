import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { CourseService } from './services/course.service';

@Component({
    selector : 'courses',
    templateUrl : './ui/courses.component.html',
    styleUrls : ['./ui/courses.component.css']
})

export class CoursesComponent extends AppComponent {

    title : String = "Courses";
    name : String = "courses";
    courses;

    constructor (private service : CourseService) {
        super();
        this.setter(service.get("model"), "courses", this);
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "courses":
                this.courses = value; 
            changes = [{
                property: property,
                value: value
            }];
            this.changed(changes, sourceId);
            break;
        }
        return changes;
    }

    private onFavouriteChange ($event, course) {

        if (this.helper.isNotNull(course.isFavourite)) {
            course.isFavourite = !course.isFavourite;
            this.set("courses", this.courses, this);
        }

    }

    private onUpdate (changes) {
        this.service.update(changes);
    }

}
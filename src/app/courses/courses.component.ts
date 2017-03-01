import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesModel } from './models/courses.model';
import { HelperService } from '../common/services/helper.service';
import { FavouriteComponent } from '../common/components/favourite.component';

@Component({
  selector: 'courses',
  templateUrl:'./ui/courses.component.html',
  styleUrls: ['./ui/courses.component.css']
})

export class CoursesComponent {
  
  favourite : FavouriteComponent = new FavouriteComponent();
  model : Object = null;
  title : String = "";
  name : String = "";
  courses : String[] = [];

  @Input() isFavourite;

  constructor(coursesModel: CoursesModel, private helper : HelperService) {
    this.set("model", coursesModel, this);
  }

  public set (property : String, value, sourceId) {

    var changes;
    switch (property) {
      case "model":
        this.model = value;
        if (this.helper.isNotNull(value.get("title"))) {
            this.title = value.get("title"); 
        } if (this.helper.isNotNull(value.get("name"))) {
            this.name = value.get("name");
        } if (this.helper.isNotNull(value.get("courses"))) {
            this.courses = value.get("courses");
        } if (this.helper.isNotNull(value.get("isFavourite"))) {
            this.isFavourite = value.get("isFavourite");                    
            this.favourite.set("isFavourite", this.isFavourite, this);
        }
        changes = [{
            property: property,
            value: value
        }];
        break;
      case "isFavourite":
        this.isFavourite = value;
        this.favourite.set("isFavourite", this.isFavourite, this);
        changes = [{
            property: property,
            value: value
        }];
        break;
    }
    return changes;
  }

  onChange ($event) {
    if (this.helper.isNotNull($event)) {
      for (var i = 0, len = $event.length; i <= len; i++) {
        this.set($event[i]["property"], $event[i]["value"], this);
      }
    }
  }

}
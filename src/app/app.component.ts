import { Component, EventEmitter } from '@angular/core';
import { HelperService } from './common/services/helper.service';

@Component({
  selector: 'narratones',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public helper : HelperService = new HelperService();
  change = new EventEmitter<any> (); 

  constructor () {

  }

  public set (property/*String*/, value/*Object*/, sourceId/*String*/) {
    switch (property) {
      default:
        break;
    }
  }

  public setter (params, paramName, sourceId) {
    if(typeof params !== 'undefined' && params !== null) {
      if (typeof params[paramName] !== 'undefined' && [paramName] !== null) {
        this.set(paramName, params[paramName], sourceId);
      }
    }
  }

  changed (changedValues/*Array*/, sourceId/*String*/) {
     this.onChange(changedValues, sourceId);
     this.change.emit(changedValues)
  }

  public onChange (changedValues, sourceId) {
    console.log("here", changedValues);
  }
    

}

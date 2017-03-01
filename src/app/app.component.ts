import { Component } from '@angular/core';
import { HelperService } from './common/services/helper.service';

@Component({
  selector: 'narratones',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private helper : HelperService;

  constructor () {}
  

  title: string = 'Hello Angular';
  name: string = "This is the name"
  isActive = false;

  

}

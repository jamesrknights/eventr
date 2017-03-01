import { Component } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
    selector : 'commonComponent',
    templateUrl: './ui/common.component.html',
    styleUrls : ['./ui/common.component.css']
})
export class CommonComponent {

    constructor (private helper : HelperService) {}

}
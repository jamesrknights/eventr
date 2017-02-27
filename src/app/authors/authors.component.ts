import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {
    
    title = 'Authors';
    name = 'These are the Authors';
    authors : string[];

    constructor (authorsService : AuthorsService) {
        this.authors = authorsService.getAuthors();
    }

    setTitle ($event) {
        if ($event !== null) {
            this.title = $event.target.value
        }
    }
    
}

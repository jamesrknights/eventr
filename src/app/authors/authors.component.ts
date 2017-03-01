import { Component, Input, Renderer, ElementRef } from '@angular/core';
import { AuthorsModel } from './models/authors.model';
import { HelperService } from '../common/services/helper.service';
import { FavouriteComponent } from '../common/components/favourite.component';



@Component({
    selector: 'authors',
    templateUrl: './ui/authors.component.html',
    styleUrls: ['./ui/authors.component.css']
})

export class AuthorsComponent {

    favourite : FavouriteComponent = new FavouriteComponent();
    model : Object = null;
    title : String = "";
    authors : String[] = [];
    @Input() isFavourite : boolean = false;

    constructor (authorModel : AuthorsModel, private helper : HelperService) {
        this.set("model", authorModel, this);
    }

    public get (property : String) {

        var result;
        switch (property) {
            case "model":
                result = this.model;
                break;
            case "title":
                result = this.title;
                break;
            default:
                break;
        }
        return result;
    }
    
    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "model":
                this.model = value;
                console.debug("model is here");
                console.log(this.model);
                if (this.helper.isNotNull(value.get("title"))) {
                    this.title = value.get("title"); 
                } if (this.helper.isNotNull(value.get("name"))) {
                    this.authors = value.get("name");
                } if (this.helper.isNotNull(value.get("authors"))) {
                    this.authors = value.get("authors");
                } if (this.helper.isNotNull(value.get("isFavourite"))) {
                    this.isFavourite = value.get("isFavourite");
                    this.favourite.set("isFavourite", this.isFavourite, this);
                }

                changes = [{
                    property: property,
                    value: value
                }];
                break;
            case "title":
                this.title = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }
        return changes;
    }

    setTitle ($event) {
        if (this.helper.isNotNull($event)) {
            this.set("title", $event.target.value, this);
        }
    }




    
}

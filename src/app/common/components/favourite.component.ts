import { Component, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favourite',
    templateUrl: './ui/favourite.component.html',
    styleUrls: ['./ui/favourite.component.css']    
    
})
export class FavouriteComponent {

    @Input() isFavourite = false;
    @Output() changeFavourite = new EventEmitter();

    constructor () {
    }

    public get (property : String){

        var result;
        switch (property) {
            case "isFavourite":
                result = this.isFavourite;
                break; 
        }
        return result;
    }
    
     
    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "isFavourite":
                this.isFavourite = value;
            changes = [{
                property: property,
                value: value
            }];
            break;
        }
        return changes;
    }

    onFavouriteChange () {
        var changes = this.set("isFavourite", !this.isFavourite, this);
        this.changeFavourite.emit(changes);
    }


}
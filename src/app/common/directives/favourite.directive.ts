import { Directive, ElementRef, Renderer, Output, Input, EventEmitter } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { FavouriteComponent } from '../components/favourite.component';

@Directive({
    selector : '[commonFavourite]',
    host : {
        '(click)' : 'onClick($event)',
        '(onBlur)' : 'onBlur()'
    }
})

export class FavouriteDirective {

    
    @Input('isFavourite') isFavourite : boolean;

    bgColor : String = '#989898';

    constructor (private helper : HelperService, private el : ElementRef, private renderer : Renderer) {}

    ngAfterViewInit() {
       this.setDefault();
    }


    onClick ($event) {
        this.isFavourite = !this.isFavourite;
        this.setColour();
    }

    setDefault () {
        this.renderer.setElementClass(this.el.nativeElement, 'glyphicon', true);
        this.renderer.setElementClass(this.el.nativeElement, 'glyphicon-star', true);
        this.setColour();
    }

    setColour () {

        if (this.isFavourite) {      
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#ffd83d');        
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#989898'); 
        }
    }

    
}
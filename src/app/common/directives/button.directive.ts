import { Directive, ElementRef, Renderer } from '@angular/core';
import { HelperService } from '../util/helper.service';

@Directive({
    selector: '[commonButton]',
    host: {
        '(click)' : 'onClick($event)',
        '(focus)' : 'onFocus($event)',
        '(blur)' : 'onBlur($event)'
    }
})
export class ButtonDirective {

    state = false;

    constructor (private el : ElementRef, private renderer : Renderer, private helper : HelperService) {}

    onClick ($event) {
        
        if (this.helper.isNotNull($event)) {
            console.log("Common Button Clicked");
            this.renderer.setElementClass(this.el.nativeElement, "active", true);
            this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0.8');
        }

    }

    onFocus () {
    }

    onBlur ($event) {
        this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
        this.renderer.setElementClass(this.el.nativeElement, "active", false);
    }

}
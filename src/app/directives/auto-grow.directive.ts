import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)':'onFocus()',
        '(blur)': 'onBlur()',
        '(click)' : 'onClick($event)'
    }
})

export class AutoGrowDirective {

    constructor (private el : ElementRef, private renderer : Renderer) {
    }

    onBlur () {    
        //this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }

    onFocus () {
        //this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }

    onClick ($event) {
        $event.stopPropagation();
        console.debug($event);
    }

}
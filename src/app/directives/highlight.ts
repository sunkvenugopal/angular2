import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {

       constructor(el: ElementRef) {
           el.nativeElement.style.backgroundColor = 'yellow';
           el.nativeElement.style.padding = '6px';
           el.nativeElement.style.color = 'green';
        }
    }
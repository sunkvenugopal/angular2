import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[myEvents]'})

export class UserEvents{

    constructor(private el: ElementRef) { }


      @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    
  }

}
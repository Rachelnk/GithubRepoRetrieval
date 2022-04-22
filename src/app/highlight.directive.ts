import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elemt: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight ('turquoise')
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.highlight("null");

  }
  private highlight(color:string) {
    this.elemt.nativeElement.style.backgroundColor = color;
  }

}

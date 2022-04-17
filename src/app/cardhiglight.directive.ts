import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardhiglight]'
})
export class CardhiglightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgb(88, 162, 191)')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);

  }
  private highlight(color: any) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}

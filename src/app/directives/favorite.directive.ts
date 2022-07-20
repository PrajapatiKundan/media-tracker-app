import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})
export class FavoriteDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}

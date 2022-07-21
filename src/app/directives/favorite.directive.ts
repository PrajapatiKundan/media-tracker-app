import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})
export class FavoriteDirective {
  @Input('mwFavorite')
  isFavorite!: boolean;

  @HostBinding('title')
  title: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    if (this.isFavorite) {
      this.title = 'Remove from favorite';
    } else {
      this.title = 'Add to favorite';
    }
  }
}

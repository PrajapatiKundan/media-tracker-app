import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mwModalPlaceholder]',
})
export class ModalPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

@Directive({
  selector: '[appMiRouterLink]'
})
export class MiRouterLinkDirective {

  // [miRouterLink]="['/inicio']"
  @HostBinding('style') stylesA = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
  @Input('appMiRouterLink') segmentos: Array<any> = []

  constructor(private miRouter: MiRouterService) { }

  @HostListener('click') onClick() {
    this.miRouter.navigate(this.segmentos)
  }

}

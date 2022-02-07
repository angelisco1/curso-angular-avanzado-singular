import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {
  urlChanged$ = new BehaviorSubject<string>('/')
  constructor() { }

  navigate(segmentos: Array<any>): void {
    const url = segmentos.join('/')
    window.history.pushState({}, '', url)
    this.urlChanged$.next(url)
  }

  navigateByUrl(url: string): void {
    window.history.pushState({}, '', url)
  }
}

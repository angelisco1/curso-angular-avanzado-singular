import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-zoom',
  templateUrl: './cmp-zoom.component.html',
  styleUrls: ['./cmp-zoom.component.css'],
  animations: [
    trigger('zoom', [
      state('inicial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(2.3)'
      })),
      transition('inicial => final', animate('500ms cubic-bezier(.93,.1,.04,.19)')),
      transition('final => inicial', animate('500ms linear'))
    ])
  ]
})
export class CmpZoomComponent implements OnInit {
  zoomState: string = 'inicial'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarZoomState(nuevoState: string) {
    this.zoomState = nuevoState
  }

}

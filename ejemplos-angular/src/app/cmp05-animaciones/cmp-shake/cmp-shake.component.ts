import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-shake',
  templateUrl: './cmp-shake.component.html',
  styleUrls: ['./cmp-shake.component.css'],
  animations: [
    trigger('shake', [
      transition('inicial <=> final', animate(1000, keyframes([
        style({transform: 'rotate(0deg)', offset: 0}),
        style({transform: 'rotate(90deg)', offset: 0.1}),
        style({transform: 'rotate(-45deg)', offset: 0.3}),
        style({transform: 'rotate(45deg)', offset: 0.7}),
        style({transform: 'rotate(-90deg)', offset: 0.9}),
        style({transform: 'rotate(0deg)', offset: 1}),
      ])))
    ]),
    trigger('cambiaColor', [
      state('inicial', style({backgroundColor: 'white'})),
      state('final', style({backgroundColor: 'black'})),
      transition('inicial <=> final', animate('1200ms ease'))
    ])
  ]
})
export class CmpShakeComponent implements OnInit {
  shakeState: string = 'inicial'
  colorState: string = 'inicial'
  constructor() { }

  ngOnInit(): void {
  }

  cambiarColorState() {
    this.colorState = this.colorState === 'inicial' ? 'final' : 'inicial'
  }

  cambiarShakeState() {
    this.shakeState = this.shakeState === 'inicial' ? 'final' : 'inicial'
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Input() cuenta: number = 0
  @Output() cuentaCambiada = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  decrementar() {
    this.cuenta -= 1
    this.cuentaCambiada.emit(this.cuenta)
  }

  incrementar() {
    this.cuenta += 1
    this.cuentaCambiada.emit(this.cuenta)
  }
}

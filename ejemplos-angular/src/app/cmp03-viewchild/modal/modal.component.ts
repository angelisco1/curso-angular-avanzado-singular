import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  oculto: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  abrir(): void {
    this.oculto = false
  }

  cerrar(): void {
    this.oculto = true
  }

}

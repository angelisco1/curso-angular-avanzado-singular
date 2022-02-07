import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp03-viewchild',
  templateUrl: './cmp03-viewchild.component.html',
  styleUrls: ['./cmp03-viewchild.component.css']
})
export class Cmp03ViewchildComponent implements AfterViewInit {
  // @ViewChild(ModalComponent) modal!: ModalComponent
  @ViewChild('miModal') modal!: ModalComponent

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.modal)
  }

  abrirModal(): void {
    this.modal.abrir()
  }

}

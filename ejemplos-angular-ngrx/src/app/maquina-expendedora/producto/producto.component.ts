import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/state/interfaces/maquina-expendedora.interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: IProducto = {nombre: '', stock: 0, precio: 0, codigo: 0}

  constructor() { }

  ngOnInit(): void {
  }

}

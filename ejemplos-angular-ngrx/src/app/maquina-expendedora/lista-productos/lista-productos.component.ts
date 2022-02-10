import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import { IProducto } from 'src/app/state/interfaces/maquina-expendedora.interfaces';
import { selectProductos$ } from 'src/app/state/selectors/maquina-expendedora.selectors';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Array<IProducto> = []
  constructor(private store$: Store<IAppState>) { }

  ngOnInit(): void {
    this.store$.select(selectProductos$)
      .subscribe((productos) => {
        this.productos = productos
      })
  }

}

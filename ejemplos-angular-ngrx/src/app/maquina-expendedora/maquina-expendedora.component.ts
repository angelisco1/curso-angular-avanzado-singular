import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarMaquina, maquinaCargada } from '../state/actions/maquina-expendedora.actions';
import { IAppState } from '../state/app.state';
import { IProducto } from '../state/interfaces/maquina-expendedora.interfaces';
import { selectCargando$ } from '../state/selectors/maquina-expendedora.selectors';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-maquina-expendedora',
  templateUrl: './maquina-expendedora.component.html',
  styleUrls: ['./maquina-expendedora.component.css']
})
export class MaquinaExpendedoraComponent implements OnInit {
  cargando$!: Observable<boolean>

  // constructor(private store$: Store<IAppState>, private productosApi: ProductosService) { }
  constructor(private store$: Store<IAppState>) { }

  ngOnInit(): void {
    this.cargando$ = this.store$.select(selectCargando$)
    this.store$.dispatch(cargarMaquina())
    // this.productosApi.getProductos()
    //   .subscribe((productos: Array<IProducto>) => {
    //     this.store$.dispatch(maquinaCargada({productos}))
    //   })

  }

}

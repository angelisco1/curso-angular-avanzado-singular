import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { ProductosService } from "src/app/maquina-expendedora/productos.service";
import { maquinaCargada } from "../actions/maquina-expendedora.actions";
import { CARGAR_MAQUINA, MAQUINA_CARGADA } from "../actions/maquina-expendedora.actiontypes";

@Injectable()
export class MaquinaExpendedoraEffects {

  cargarProductos$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CARGAR_MAQUINA),
        mergeMap(() => {
          return this.productosApi.getProductos()
            .pipe(
              map(productos => {
                // return {
                //   type: MAQUINA_CARGADA,
                //   productos
                // }
                return maquinaCargada({productos})
              })
            )
        })
      )
  })


  constructor(private actions$: Actions, private productosApi: ProductosService) {}


}
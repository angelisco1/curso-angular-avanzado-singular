import { IAppState } from "../app.state";
import { createSelector } from '@ngrx/store';
import { IMaquinaExpState } from "../interfaces/maquina-expendedora.interfaces";


export const selectMaquinaExpState = (state: IAppState) => state.maquinaExpState

export const selectCargando$ = createSelector(
  selectMaquinaExpState,
  (state: IMaquinaExpState) => state.cargando
)

export const selectProductos$ = createSelector(
  selectMaquinaExpState,
  (state: IMaquinaExpState) => state.productos
)
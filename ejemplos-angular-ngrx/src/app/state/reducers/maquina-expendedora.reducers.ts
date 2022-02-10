import { createReducer, on } from "@ngrx/store";
import { cargarMaquina, maquinaCargada } from "../actions/maquina-expendedora.actions";
import { IMaquinaExpState, IProducto } from "../interfaces/maquina-expendedora.interfaces";


const initialState: IMaquinaExpState = {
  productos: [],
  cargando: false,
  totalRecaudado: 0,
  dineroIngresado: 0,
  dineroADevolver: 0,
  totalStock: 0,
  fueraDeServicio: false,
}

export const maquinaExpReducer = createReducer(
  initialState,
  on(cargarMaquina, (state) => {
    return {
      ...state,
      cargando: true
    }
  }),
  on(maquinaCargada, (state, action) => {
    return {
      ...state,
      cargando: false,
      productos: action.productos,
      totalStock: action.productos.reduce(
        (acc: number, producto: IProducto) => acc += producto.stock,
        0
      )
    }
  }),
)
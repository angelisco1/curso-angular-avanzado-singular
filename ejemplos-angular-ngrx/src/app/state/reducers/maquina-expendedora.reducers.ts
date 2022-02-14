import { createReducer, on } from "@ngrx/store";
import { cargarMaquina, maquinaCargada, sacarProducto } from "../actions/maquina-expendedora.actions";
import { IMaquinaExpState, IProducto } from "../interfaces/maquina-expendedora.interfaces";


const initialState: IMaquinaExpState = {
  productos: [],
  cargando: false,
  totalRecaudado: 0,
  // dineroIngresado: 0,
  // dineroADevolver: 0,
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
  on(sacarProducto, (state, action) => {
    return {
      ...state,
      totalStock: state.totalStock - 1,
      productos: state.productos.map((prod: IProducto) => {
        if (prod.codigo === action.codigo) {
          return {
            ...prod,
            stock: prod.stock - 1
          }
        }
        return {...prod}
      })
    }
  })
)
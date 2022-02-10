import { createReducer, on } from "@ngrx/store";
import { cambiarCuenta, decrementarCuenta, incrementarCuenta } from "../actions/contador.actions";


export const initialState: number = 0

export const contadorReducer = createReducer(
  initialState,
  on(incrementarCuenta, (state) => {
    return state + 1
  }),
  on(decrementarCuenta, (state) => {
    return state - 1
  }),
  on(cambiarCuenta, (state, action) => {
    return action.nuevaCuenta
  }),
)
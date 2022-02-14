import { createReducer, on } from "@ngrx/store";
import { ingresarDinero } from "../actions/panel-pago.actions";
import { IPanelPagoState } from "../interfaces/maquina-expendedora.interfaces";

const initialState: IPanelPagoState = {
  dineroIngresado: 0,
  dineroADevolver: 0,
}

export const panelPagoReducer = createReducer(
  initialState,
  on(ingresarDinero, (state, action) => {
    return {
      ...state,
      dineroIngresado: state.dineroIngresado + action.cantidad
    }
  })
)
import { createAction, props } from "@ngrx/store";
import * as ActionTypes from './contador.actiontypes'


export const incrementarCuenta = createAction(
  ActionTypes.INCREMENTAR
)

export const decrementarCuenta = createAction(
  ActionTypes.DECREMENTAR
)

export const cambiarCuenta = createAction(
  ActionTypes.CAMBIAR_CUENTA,
  props<{nuevaCuenta: number}>()
)
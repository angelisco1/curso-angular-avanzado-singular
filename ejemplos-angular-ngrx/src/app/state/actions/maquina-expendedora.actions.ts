import { createAction, props } from "@ngrx/store";
import { IProducto } from "../interfaces/maquina-expendedora.interfaces";
import * as ActionTypes from './maquina-expendedora.actiontypes'

export const cargarMaquina = createAction(
  ActionTypes.CARGAR_MAQUINA
)

export const maquinaCargada = createAction(
  ActionTypes.MAQUINA_CARGADA,
  props<{productos: Array<IProducto>}>()
)
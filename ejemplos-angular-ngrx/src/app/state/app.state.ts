import { ActionReducerMap } from "@ngrx/store";
import { IMaquinaExpState, IPanelPagoState } from "./interfaces/maquina-expendedora.interfaces";
import { contadorReducer } from "./reducers/contador.reducers";
import { maquinaExpReducer } from "./reducers/maquina-expendedora.reducers";
import { panelPagoReducer } from "./reducers/panel-pago.reducers";

export interface IAppState {
  contadorState: number,
  maquinaExpState: IMaquinaExpState,
  panelPagoState: IPanelPagoState
}

export const APP_REDUCERS: ActionReducerMap<IAppState> = {
  contadorState: contadorReducer,
  maquinaExpState: maquinaExpReducer,
  panelPagoState: panelPagoReducer
}
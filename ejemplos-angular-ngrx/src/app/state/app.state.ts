import { ActionReducerMap } from "@ngrx/store";
import { IMaquinaExpState } from "./interfaces/maquina-expendedora.interfaces";
import { contadorReducer } from "./reducers/contador.reducers";
import { maquinaExpReducer } from "./reducers/maquina-expendedora.reducers";

export interface IAppState {
  contadorState: number,
  maquinaExpState: IMaquinaExpState
}

export const APP_REDUCERS: ActionReducerMap<IAppState> = {
  contadorState: contadorReducer,
  maquinaExpState: maquinaExpReducer
}
import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { IPanelPagoState } from "../interfaces/maquina-expendedora.interfaces";


export const selectPanelPago = (state: IAppState) => state.panelPagoState

export const dineroIngresado = createSelector(
  selectPanelPago,
  (state: IPanelPagoState) => state.dineroIngresado
)
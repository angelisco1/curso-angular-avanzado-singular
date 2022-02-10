import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";

export const contadorSelector = (state: IAppState) => state.contadorState

export const selectCuenta$ = createSelector(
  contadorSelector,
  (state: number) => state
)

export const selectCuentaX2$ = createSelector(
  contadorSelector,
  (state: number) => state * 2
)
import { createAction, props } from "@ngrx/store";

export const ingresarDinero = createAction(
  '[PANEL PAGO] Ingresar dinero',
  props<{cantidad: number}>()
)
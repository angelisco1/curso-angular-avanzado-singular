export interface IProducto {
  nombre: string,
  stock: number,
  precio: number,
  codigo: number
}

export interface IMaquinaExpState {
  productos: Array<IProducto>,
  cargando: boolean,
  fueraDeServicio: boolean,
  totalRecaudado: number,
  totalStock: number,
}

export interface IPanelPagoState {
  dineroIngresado: number,
  dineroADevolver: number,
}
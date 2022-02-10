import { Injectable } from '@angular/core';
import { IProducto } from '../state/interfaces/maquina-expendedora.interfaces';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/angular-sngular/productos.json'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Array<IProducto>> {
    return this.http.get(this.URL)
      .pipe(
        map((objProductos: any) => {
          return Object.values(objProductos)
        })
      )
  }
}

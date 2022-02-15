import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Servicio para interactuar con la API de tareas que hay en Firebase
 */
@Injectable({
  providedIn: 'root'
})
export class TareasService {
  /**
   * URL de la API Rest de Firebase para trabajar con las tareas
   */
  private URL: string = environment.url_tareas

  /**
   * @ignore
   */
  constructor(private http: HttpClient) { }

  /**
   * Método que devuelve todas las tareas que hay guardadas en Firebase
   * @returns Observable de un array con todas las tareas
   */
  getTareas(): Observable<any> {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map((tareas: any) => {
          const arrTareas: Array<any> = []
          for (let id in tareas) {
            const tarea = {...tareas[id], id}
            arrTareas.push(tarea)
          }
          return arrTareas
        })
      )
  }

  /**
   * Devuelve una tarea dado su identificador
   * @param id Es el identificador de la tarea que queremos obtener
   * @returns Un observable con la tarea que hemos pedido
   */
  getTarea(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}.json`)
      .pipe(
        map((tarea: any) => {
          tarea.id = id
          return tarea
        })
      )
  }

  /**
   * Crea una nueva tarea
   * @param nuevaTarea Objeto con los datos para crear una nueva tarea
   * @returns Un observable con el identificador que se le ha puesto a la tarea creada
   */
  createTarea(nuevaTarea: any): Observable<any> {
    return this.http.post(`${this.URL}.json`, nuevaTarea)
    // return this.http.post('http://localhost:3000/tareas', nuevaTarea)
  }
}

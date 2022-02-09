import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private URL: string = environment.url_tareas
  constructor(private http: HttpClient) { }

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

  getTarea(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}.json`)
      .pipe(
        map((tarea: any) => {
          tarea.id = id
          return tarea
        })
      )
  }

  createTarea(nuevaTarea: any): Observable<any> {
    // return this.http.post(`${this.URL}.json`, nuevaTarea)
    return this.http.post('http://localhost:3000/tareas', nuevaTarea)
  }
}

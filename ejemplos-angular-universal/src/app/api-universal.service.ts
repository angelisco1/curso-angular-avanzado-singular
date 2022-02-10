import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUniversalService {

  constructor(private http: HttpClient) { }

  login(datosLogin: any): Observable<any> {
    return this.http.post('/login', datosLogin)
  }

  getDatos(): Observable<any> {
    return this.http.get('/api/datos')
  }

}

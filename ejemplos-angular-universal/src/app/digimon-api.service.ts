import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface IDigimon {
  name: string,
  level: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class DigimonApiService {
  URL: string = 'https://digimon-api.vercel.app/api/digimon'

  constructor(private http: HttpClient) { }

  getDigimons(): Observable<Array<IDigimon>> {
    return this.http.get<Array<IDigimon>>(this.URL)
  }

  getDigimonByLevel(level: string): Observable<Array<IDigimon>> {
    return this.http.get<Array<IDigimon>>(`${this.URL}/level/${level}`)
  }

  getDigimonByName(name: string): Observable<IDigimon> {
    return this.http.get<Array<IDigimon>>(`${this.URL}/name/${name}`)
      .pipe(
        map((digimon: any) => digimon[0])
      )
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DigimonApiService, IDigimon } from '../digimon-api.service';


@Component({
  selector: 'app-lista-digimon',
  templateUrl: './lista-digimon.component.html',
  styleUrls: ['./lista-digimon.component.css']
})
export class ListaDigimonComponent implements OnInit {
  digimons$!: Observable<Array<IDigimon>>

  constructor(private digiApi: DigimonApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.digimons$ =
    this.getDigimons()
  }

  getDigimons(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const level = params.get('level')
      if (level) {
        this.digimons$ = this.digiApi.getDigimonByLevel(level)
      } else {
        this.digimons$ = this.digiApi.getDigimons()
      }
    })

  }

}

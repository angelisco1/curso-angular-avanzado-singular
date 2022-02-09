import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonApiService, IDigimon } from '../digimon-api.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {
  digimon: IDigimon = {name: '', img: '', level: ''}

  constructor(private digiApi: DigimonApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name')!
    this.digiApi.getDigimonByName(name)
      .subscribe((digimon: IDigimon) => {
        this.digimon = digimon
      })
  }

}

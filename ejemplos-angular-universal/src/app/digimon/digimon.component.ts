import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DigimonApiService, IDigimon } from '../digimon-api.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {
  digimon: IDigimon = {name: '', img: '', level: ''}

  constructor(private digiApi: DigimonApiService, private activatedRoute: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name')!
    this.digiApi.getDigimonByName(name)
      .subscribe((digimon: IDigimon) => {
        this.digimon = digimon
        this.title.setTitle('Digimon - ' + digimon.name)
        this.meta.addTag({name: 'keywords', content: `digimon, ${digimon.name}`})
      })
  }

}

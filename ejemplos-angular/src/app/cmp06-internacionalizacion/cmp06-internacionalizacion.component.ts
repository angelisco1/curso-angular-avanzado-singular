import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp06-internacionalizacion',
  templateUrl: './cmp06-internacionalizacion.component.html',
  styleUrls: ['./cmp06-internacionalizacion.component.css']
})
export class Cmp06InternacionalizacionComponent implements OnInit {
  languages = [
    { texto: 'EN', codigo: '/en-US' },
    { texto: 'ES', codigo: '/es' },
    { texto: 'FR', codigo: '/fr' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

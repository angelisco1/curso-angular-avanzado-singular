import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {

  abierto: boolean = false
  @Input() titulo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  toggleAbierto(): void {
    this.abierto = !this.abierto
  }

}

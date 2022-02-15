import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent implements OnInit {
  @Input() tarea!: any;
  constructor() { }

  ngOnInit(): void {
  }

}

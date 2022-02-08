import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas$!: Observable<any>

  constructor(private tareas: TareasService) {}

  ngOnInit(): void {
    this.tareas$ = this.tareas.getTareas()
  }

}

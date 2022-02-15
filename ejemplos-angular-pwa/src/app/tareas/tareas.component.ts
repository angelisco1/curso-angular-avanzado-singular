import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas!: Array<any>

  constructor(private tareas: TareasService) {}

  ngOnInit(): void {
    this.tareas.getTareas()
      .pipe(
        delay(3000)
      )
      .subscribe((datos) => {
        this.listaTareas = datos
      })
  }

}

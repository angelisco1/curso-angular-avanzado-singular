import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  tarea!: any

  constructor(private activatedRoute: ActivatedRoute, private tareas: TareasService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.tareas.getTarea(id)
      .subscribe((tarea: any) => {
        this.tarea = tarea
      })
  }

}

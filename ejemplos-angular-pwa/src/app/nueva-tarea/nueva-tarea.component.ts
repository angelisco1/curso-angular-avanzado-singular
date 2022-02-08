import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  formTarea: FormGroup

  constructor(private tareas: TareasService, private router: Router) {
    this.formTarea = new FormGroup({
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    this.tareas.createTarea(this.formTarea.value)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }

}

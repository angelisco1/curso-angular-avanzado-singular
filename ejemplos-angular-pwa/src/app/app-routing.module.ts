import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: '', component: TareasComponent },
  { path: 'nueva-tarea', component: NuevaTareaComponent },
  { path: 'tareas/:id', component: TareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

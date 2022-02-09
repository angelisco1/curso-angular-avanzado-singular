import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonComponent } from './digimon/digimon.component';
import { ListaDigimonComponent } from './lista-digimon/lista-digimon.component';

const routes: Routes = [
  { path: '', component: ListaDigimonComponent },
  { path: 'levels/:level', component: ListaDigimonComponent },
  { path: 'digimons/:name', component: DigimonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

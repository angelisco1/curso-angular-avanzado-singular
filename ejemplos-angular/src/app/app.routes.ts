import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./cmp01-lazy-loading/inicio/inicio.component";

const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(file => file.AdminModule) },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)
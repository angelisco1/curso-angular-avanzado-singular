import { InicioComponent } from "src/app/cmp01-lazy-loading/inicio/inicio.component";
import { Cmp02TransclusionComponent } from "src/app/cmp02-transclusion/cmp02-transclusion.component";
import { Cmp03ViewchildComponent } from "src/app/cmp03-viewchild/cmp03-viewchild.component";
import { MiRouterModule } from "./mi-router.module";

const MIS_RUTAS = [
  { path: '', component: InicioComponent },
  { path: 'transclusion', component: Cmp02TransclusionComponent },
  { path: 'modal', component: Cmp03ViewchildComponent }
]

export const MiRoutingModule = MiRouterModule.forRoot(MIS_RUTAS)
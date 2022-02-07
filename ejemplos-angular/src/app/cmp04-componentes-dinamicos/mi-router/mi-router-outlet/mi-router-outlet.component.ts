import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { InicioComponent } from 'src/app/cmp01-lazy-loading/inicio/inicio.component';
import { Cmp03ViewchildComponent } from 'src/app/cmp03-viewchild/cmp03-viewchild.component';
import { MiHostDirective } from '../mi-host.directive';
import { MiRouterService } from '../mi-router.service';


@Component({
  selector: 'app-mi-router-outlet',
  templateUrl: './mi-router-outlet.component.html',
  styleUrls: ['./mi-router-outlet.component.css']
})
export class MiRouterOutletComponent implements AfterViewInit {
  @ViewChild(MiHostDirective) host!: MiHostDirective

  constructor(private miRouter: MiRouterService, @Inject('RUTAS') private rutas: Array<any>) { }

  ngAfterViewInit(): void {
    this.miRouter.urlChanged$.subscribe((url: string) => {
      // switch(url) {
      //   case '/':
      //     this.crearComponente(InicioComponent)
      //     break
      //   case '/inicio':
      //     this.crearComponente(InicioComponent)
      //     break
      //   case '/modal':
      //     this.crearComponente(Cmp03ViewchildComponent)
      //     break
      // }
      const ruta = this.rutas.find((route: any) => '/' + route.path === url)
      this.crearComponente(ruta.component)
    })
  }

  crearComponente(cmp: any): void {
    const vcr = this.host.viewContainerRef
    vcr.clear()
    vcr.createComponent(cmp)
  }

}

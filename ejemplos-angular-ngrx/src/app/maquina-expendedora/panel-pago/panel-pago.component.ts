import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/state/app.state';
import { dineroIngresado } from 'src/app/state/selectors/panel-pago.selectors';
import { ingresarDinero } from '../../state/actions/panel-pago.actions';

@Component({
  selector: 'app-panel-pago',
  templateUrl: './panel-pago.component.html',
  styleUrls: ['./panel-pago.component.css']
})
export class PanelPagoComponent implements OnInit {
  dineroIngresado$!: Observable<number>

  constructor(private store$: Store<IAppState>) { }

  ngOnInit(): void {
    this.dineroIngresado$ = this.store$.select(dineroIngresado)
  }

  ingresar(cantidad: number) {
    this.store$.dispatch(ingresarDinero({cantidad}))
  }

}

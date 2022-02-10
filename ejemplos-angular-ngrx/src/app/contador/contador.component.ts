import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementarCuenta, incrementarCuenta, cambiarCuenta } from '../state/actions/contador.actions';
import { IAppState } from '../state/app.state';
import { selectCuenta$, selectCuentaX2$ } from '../state/selectors/contador.selectors';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cuenta$!: Observable<number>
  cuentaX2$!: Observable<number>

  constructor(private store$: Store<IAppState>) { }

  ngOnInit(): void {
    this.cuenta$ = this.store$.select(selectCuenta$)
    this.cuentaX2$ = this.store$.select(selectCuentaX2$)
  }

  incrementar() {
    this.store$.dispatch(incrementarCuenta())
  }

  decrementar() {
    this.store$.dispatch(decrementarCuenta())
  }

  cambiarCuenta(event: any) {
    const nuevaCuenta = Number(event.target.value)
    this.store$.dispatch(cambiarCuenta({nuevaCuenta}))
  }

}

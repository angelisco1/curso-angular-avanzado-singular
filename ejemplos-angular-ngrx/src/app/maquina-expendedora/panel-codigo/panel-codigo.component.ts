import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sacarProducto } from 'src/app/state/actions/maquina-expendedora.actions';
import { IAppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-panel-codigo',
  templateUrl: './panel-codigo.component.html',
  styleUrls: ['./panel-codigo.component.css']
})
export class PanelCodigoComponent implements OnInit {

  constructor(private store$: Store<IAppState>) { }

  ngOnInit(): void {
  }

  sacarProducto(codigo: string) {
    this.store$.dispatch(sacarProducto({codigo: Number(codigo)}))
  }

}

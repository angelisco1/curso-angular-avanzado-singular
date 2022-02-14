import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContadorComponent } from './contador/contador.component';
import { MaquinaExpendedoraComponent } from './maquina-expendedora/maquina-expendedora.component';
import { ListaProductosComponent } from './maquina-expendedora/lista-productos/lista-productos.component';
import { ProductoComponent } from './maquina-expendedora/producto/producto.component';
import { PanelPagoComponent } from './maquina-expendedora/panel-pago/panel-pago.component';
import { PanelCodigoComponent } from './maquina-expendedora/panel-codigo/panel-codigo.component';
import { PanelEstadoComponent } from './maquina-expendedora/panel-estado/panel-estado.component';
import { APP_REDUCERS } from './state/app.state';
import { HttpClientModule } from '@angular/common/http';
import { MaquinaExpendedoraEffects } from './state/effects/maquina-expendedora.effects';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    MaquinaExpendedoraComponent,
    ListaProductosComponent,
    ProductoComponent,
    PanelPagoComponent,
    PanelCodigoComponent,
    PanelEstadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(APP_REDUCERS, {}),
    EffectsModule.forRoot([MaquinaExpendedoraEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

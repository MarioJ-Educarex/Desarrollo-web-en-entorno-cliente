import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { BDComponent } from './DAM/bd/bd.component';
import { DIComponent } from './DAM/di/di.component';
import { PMMSComponent } from './DAM/pmms/pmms.component';
import { PSPComponent } from './DAM/psp/psp.component';
import { DespliegueComponent } from './DAW/despliegue/despliegue.component';
import { DIWComponent } from './DAW/diw/diw.component';
import { DWECComponent } from './DAW/dwec/dwec.component';
import { DWESComponent } from './DAW/dwes/dwes.component';
import { FHComponent } from './ASIR/fh/fh.component';
import { LMComponent } from './ASIR/lm/lm.component';
import { SORComponent } from './ASIR/sor/sor.component';

@NgModule({
  declarations: [
    AppComponent,
    BDComponent,
    DIComponent,
    PMMSComponent,
    PSPComponent,
    DespliegueComponent,
    DIWComponent,
    DWECComponent,
    DWESComponent,
    FHComponent,
    LMComponent,
    SORComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

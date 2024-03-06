import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HortalizasRoutingModule } from './hortalizas-routing.module';
import { TomateComponent } from './tomate/tomate.component';
import { PimientoComponent } from './pimiento/pimiento.component';
import { PatatasComponent } from './patatas/patatas.component';


@NgModule({
  declarations: [
    TomateComponent,
    PimientoComponent,
    PatatasComponent
  ],
  imports: [
    CommonModule,
    HortalizasRoutingModule
  ]
})
export class HortalizasModule { }

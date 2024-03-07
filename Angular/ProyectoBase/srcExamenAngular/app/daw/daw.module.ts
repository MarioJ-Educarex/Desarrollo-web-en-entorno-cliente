import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAWRoutingModule } from './daw-routing.module';
import { DespliegueComponent } from './despliegue/despliegue.component';
import { DIWComponent } from './diw/diw.component';
import { DWECComponent } from './dwec/dwec.component';
import { DWESComponent } from './dwes/dwes.component';


@NgModule({
  declarations: [
    DespliegueComponent,
    DIWComponent,
    DWECComponent,
    DWESComponent
  ],
  imports: [
    CommonModule,
    DAWRoutingModule
  ]
})
export class DAWModule { }

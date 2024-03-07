import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAMRoutingModule } from './dam-routing.module';
import { BDComponent } from './bd/bd.component';
import { DIComponent } from './di/di.component';
import { PMMSComponent } from './pmms/pmms.component';
import { PSPComponent } from './psp/psp.component';


@NgModule({
  declarations: [
    BDComponent,
    DIComponent,
    PMMSComponent,
    PSPComponent
  ],
  imports: [
    CommonModule,
    DAMRoutingModule
  ]
})
export class DAMModule { }

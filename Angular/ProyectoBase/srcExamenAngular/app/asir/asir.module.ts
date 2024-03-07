import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ASIRRoutingModule } from './asir-routing.module';
import { BDComponent } from './bd/bd.component';
import { FHComponent } from './fh/fh.component';
import { LMComponent } from './lm/lm.component';
import { SORComponent } from './sor/sor.component';


@NgModule({
  declarations: [
    BDComponent,
    FHComponent,
    LMComponent,
    SORComponent
  ],
  imports: [
    CommonModule,
    ASIRRoutingModule
  ]
})
export class ASIRModule { }

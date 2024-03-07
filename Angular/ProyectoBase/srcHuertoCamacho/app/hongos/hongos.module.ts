import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HongosRoutingModule } from './hongos-routing.module';
import { ChampiComponent } from './champi/champi.component';
import { NiscaloComponent } from './niscalo/niscalo.component';
import { BoletusComponent } from './boletus/boletus.component';


@NgModule({
  declarations: [
    ChampiComponent,
    NiscaloComponent,
    BoletusComponent
  ],
  imports: [
    CommonModule,
    HongosRoutingModule
  ]
})
export class HongosModule { }

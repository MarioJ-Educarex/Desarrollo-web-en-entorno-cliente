import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form6RoutingModule } from './form6-routing.module';
import { PadreComponent } from './padre/padre.component';
import { Form6Component } from './form6/form6.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    PadreComponent,
    Form6Component,
    CronometroComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    Form6RoutingModule
  ]
})
export class Form6Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form7RoutingModule } from './form7-routing.module';
import { Form7Component } from './form7/form7.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HuertoComponent } from './huerto/huerto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Form7Component,
    HortalizaComponent,
    FrutalComponent,
    HuertoComponent
  ],
  imports: [
    CommonModule,
    Form7RoutingModule,
    FormsModule
  ]
})
export class Form7Module { }

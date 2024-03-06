import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticasRoutingModule } from './aromaticas-routing.module';
import { TomilloComponent } from './tomillo/tomillo.component';
import { HierbabuenaComponent } from './hierbabuena/hierbabuena.component';
import { PerejilComponent } from './perejil/perejil.component';


@NgModule({
  declarations: [
    TomilloComponent,
    HierbabuenaComponent,
    PerejilComponent
  ],
  imports: [
    CommonModule,
    AromaticasRoutingModule
  ]
})
export class AromaticasModule { }

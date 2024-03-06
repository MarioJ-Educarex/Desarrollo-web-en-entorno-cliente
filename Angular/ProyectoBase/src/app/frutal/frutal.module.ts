import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { NectarinaComponent } from './nectarina/nectarina.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { AlbaricoqueComponent } from './albaricoque/albaricoque.component';
import { ParaguayasComponent } from './paraguayas/paraguayas.component';


@NgModule({
  declarations: [
    NectarinaComponent,
    ManzanaComponent,
    AlbaricoqueComponent,
    ParaguayasComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }

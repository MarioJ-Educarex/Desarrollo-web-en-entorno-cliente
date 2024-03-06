import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form7RoutingModule } from './form7-routing.module';
import { Form7Component } from './form7/form7.component';


@NgModule({
  declarations: [
    Form7Component
  ],
  imports: [
    CommonModule,
    Form7RoutingModule
  ]
})
export class Form7Module { }

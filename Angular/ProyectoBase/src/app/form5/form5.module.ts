import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form5RoutingModule } from './form5-routing.module';
import { Form5Component } from './form5/form5.component';
import { BodyComponent } from './form5/body/body.component';
import { FooterComponent } from './form5/footer/footer.component';
import { HeaderComponent } from './form5/header/header.component';

@NgModule({
  declarations: [BodyComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule],
})
export class Form5Module {}

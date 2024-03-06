import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { AromaticasComponent } from './aromaticas/aromaticas.component';
import { HuertoComponent } from './huerto/huerto.component';
import { FrutalComponent } from './frutal/frutal.component';

@NgModule({
  declarations: [
    AppComponent,
    HortalizaComponent,
    AromaticasComponent,
    HuertoComponent,
    FrutalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

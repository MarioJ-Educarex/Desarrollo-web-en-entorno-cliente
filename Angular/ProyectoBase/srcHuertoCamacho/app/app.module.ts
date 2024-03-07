import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HortalizasComponent } from './hortalizas/hortalizas.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HongosComponent } from './hongos/hongos.component';

@NgModule({
  declarations: [
    AppComponent,
    HortalizasComponent,
    FrutalComponent,
    HongosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

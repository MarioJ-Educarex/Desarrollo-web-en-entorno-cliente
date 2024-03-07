import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DAMComponent } from './dam/dam.component';
import { AsirComponent } from './asir/asir.component';
import { DawComponent } from './daw/daw.component';
// import { DAWComponent } from './dam/dam.component';
// import { ASIRComponent } from './dam/dam.component';

@NgModule({
  declarations: [AppComponent, DAMComponent, AsirComponent, DawComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

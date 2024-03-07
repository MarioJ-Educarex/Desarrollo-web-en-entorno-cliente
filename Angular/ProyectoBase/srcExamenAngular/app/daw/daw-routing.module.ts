import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespliegueComponent } from './despliegue/despliegue.component';
import { DIWComponent } from './diw/diw.component';
import { DWECComponent } from './dwec/dwec.component';
import { DWESComponent } from './dwes/dwes.component';

const routes: Routes = [
  {
    path:'despliegue',
    component:DespliegueComponent
  },
  {
    path:'diw',
    component:DIWComponent
  },
  {
    path:'dwec',
    component:DWECComponent
  },
  {
    path:'dwes',
    component:DWESComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DAWRoutingModule { }

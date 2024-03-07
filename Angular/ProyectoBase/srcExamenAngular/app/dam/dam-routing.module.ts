import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BDComponent } from './bd/bd.component';
import { DIComponent } from './di/di.component';
import { PMMSComponent } from './pmms/pmms.component';
import { PSPComponent } from './psp/psp.component';

const routes: Routes = [
  {
    path:'bd',
    component:BDComponent
  },
  {
    path:'di',
    component:DIComponent
  },
  {
    path:'pmms',
    component:PMMSComponent
  },
  {
    path:'psp',
    component:PSPComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DAMRoutingModule { }

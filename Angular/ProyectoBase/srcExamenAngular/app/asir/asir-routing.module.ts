import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BDComponent } from './bd/bd.component';
import { FHComponent } from './fh/fh.component';
import { LMComponent } from './lm/lm.component';
import { SORComponent } from './sor/sor.component';

const routes: Routes = [
  {
    path:'bd',
    component:BDComponent
  },
  {
    path:'fh',
    component:FHComponent
  },
  {
    path:'lm',
    component:LMComponent
  },
  {
    path:'sor',
    component:SORComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ASIRRoutingModule { }

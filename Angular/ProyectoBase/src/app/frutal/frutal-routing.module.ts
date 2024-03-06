import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KiwiComponent } from './kiwi/kiwi.component';
import { MelocotonComponent } from './melocoton/melocoton.component';
import { PapayaComponent } from './papaya/papaya.component';

const routes: Routes = [
  {
    path: 'kiwi',
    component: KiwiComponent
  },
  {
    path: 'melocoton',
    component: MelocotonComponent
  },
  {
    path: 'papaya',
    component: PapayaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutalComponent } from './frutal/frutal.component';
import { HongosComponent } from './hongos/hongos.component';
import { HortalizasComponent } from './hortalizas/hortalizas.component';

const routes: Routes = [
  {
    path: 'hortalizas',
    component: HortalizasComponent,
    loadChildren: () => import('./hortalizas/hortalizas.module').then(m => m.HortalizasModule)
  },
  {
    path: 'frutal',
    component: FrutalComponent ,
    loadChildren: () => import('./frutal/frutal.module').then(m => m.FrutalModule)
  },
  {
    path: 'hongos',
    component: HongosComponent,
    loadChildren: () => import('./hongos/hongos.module').then(m => m.HongosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

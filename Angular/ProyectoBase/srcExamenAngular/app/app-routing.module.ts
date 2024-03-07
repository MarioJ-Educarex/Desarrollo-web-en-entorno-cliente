import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsirComponent } from './asir/asir.component';
import { DAMComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';

const routes: Routes = [
  {
    path:'dam',
    component:DAMComponent,
    loadChildren: () => import('./dam/dam.module').then(m => m.DAMModule)

  },
  {
    path:'daw',
    component:DawComponent,
    loadChildren: () => import('./daw/daw.module').then(m => m.DAWModule)

  },
  {
    path:'asir',
    component:AsirComponent,
    loadChildren: () => import('./asir/asir.module').then(m => m.ASIRModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

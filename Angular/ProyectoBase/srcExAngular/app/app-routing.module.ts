import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dam',
    component: DAMCOMPONENT
  },
  {
    path:'daw',
    component: DAWCOMPONENT
  },
  {
    path:'asir',
    component: ASIRCOMPONENT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

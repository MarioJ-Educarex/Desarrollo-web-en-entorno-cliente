import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Form3Component } from './form3/form3/form3.component';
import { Form4Component } from './form4/form4/form4.component';
import { Form5Component } from './form5/form5/form5.component';
import { Form7Component } from './form7/form7/form7.component';
import { Form6Component } from './form6/form6/form6.component';

const routes: Routes = [
  {
    path: 'form1', // Ruta para el formulario 1
    component: Form1Component,
    loadChildren: () =>
      import('./form1/form1.module').then((m) => m.Form1Module),
  },
  {
    path: 'form2', // Ruta para el formulario 2
    component: Form2Component,
    loadChildren: () =>
      import('./form2/form2.module').then((m) => m.Form2Module),
  },
  {
    path: 'form3', // Ruta para el formulario 3
    component: Form3Component,
    loadChildren: () =>
      import('./form3/form3.module').then((m) => m.Form3Module),
  },
  {
    path: 'form4', // Ruta para el formulario 4
    component: Form4Component,
    loadChildren: () =>
      import('./form4/form4.module').then((m) => m.Form4Module),
  },
  {
    path: 'form5', // Ruta para el formulario 5
    component: Form5Component,
    loadChildren: () =>
      import('./form5/form5.module').then((m) => m.Form5Module),
  },

  {
    path: 'form6', // Ruta para el formulario 6
    component: Form6Component,
    loadChildren: () =>
      import('./form6/form6.module').then((m) => m.Form6Module),
  },
  {
    path: 'form7',
    component: Form7Component,
    loadChildren: () =>
      import('./form7/form7.module').then((m) => m.Form7Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

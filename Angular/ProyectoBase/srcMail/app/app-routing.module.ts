import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibirMailComponent } from './recibir-mail/recibir-mail.component';
import { EnviarMailComponent } from './enviar-mail/enviar-mail.component';
import { NoLeidosComponent } from './no-leidos/no-leidos.component';
import { LeidosComponent } from './leidos/leidos.component';
import { EnviadosComponent } from './enviados/enviados.component';

const routes: Routes = [
  {
    path: 'recibirMail',
    component: RecibirMailComponent,
  },
  {
    path: 'enviarMail',
    component: EnviarMailComponent,
  },
  {
    path: 'noLeidos',
    component: NoLeidosComponent,
  },
  {
    path: 'leidos',
    component: LeidosComponent,
  },
  {
    path: 'enviados',
    component: EnviadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibirMailComponent } from './recibir-mail/recibir-mail.component';
import { EnviarMailComponent } from './enviar-mail/enviar-mail.component';

const routes: Routes = [
  {
    path: 'recibirMail',
    component: RecibirMailComponent,
  },
  {
    path: 'enviarMail',
    component: EnviarMailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

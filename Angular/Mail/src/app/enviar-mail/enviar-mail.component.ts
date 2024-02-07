import { Component } from '@angular/core';
import { Correo } from '../correo';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css'],
})
export class EnviarMailComponent {
  usuario: string = 'Mario';

  constructor(private httpCliente: ServicioClienteService) {}

  mail: Correo = {
    id: 0,
    origen: this.usuario,
    destinatario: '',
    mensaje: '',
    asunto: '',
    fecha: new Date().toString(),
    leido: 0,
  };

  enviar() {
    this.mail.origen=this.usuario;
    this.httpCliente.escribirMensaje(this.mail).subscribe((x) => {
      alert('Mensaje enviado');
      console.log(x);

      this.mail = new Correo(
        0,
        this.usuario,
        '',
        '',
        '',
        new Date().toString(),
        0
      );
    });
  }
}

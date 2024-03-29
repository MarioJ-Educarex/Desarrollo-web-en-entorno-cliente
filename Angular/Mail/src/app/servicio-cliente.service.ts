import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correo } from './correo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioClienteService {
  constructor(private httpClient: HttpClient) {}

  mostrarTodosMensajes(nombreUs: string): Observable<Correo[]> {
    return this.httpClient.get<Correo[]>(
      'http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_R.php?usuario=' +
        nombreUs
    );
  }
  mostrarMensajesNoLeidos(nombreUs: string): Observable<Correo[]> {
    return this.httpClient.get<Correo[]>(
      'http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_RN.php?usuario=' +
        nombreUs
    );
  }

  escribirMensaje(email: Correo) {
    return this.httpClient.post(
      'http://moralo.atwebpages.com/serviciosMail/MandarMensajeMail.php',
      email,
      { responseType: 'text' }
    );
  }

  mostrarMensajesEnviados(nombreUs: string): Observable<Correo[]> {
    return this.httpClient.get<Correo[]>(
      'http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_E.php?usuario=' +
        nombreUs
    );
  }

  leerMensaje(mensaje: Correo) {
    //Hace un update por eso post
    return this.httpClient.post(
      'http://moralo.atwebpages.com/serviciosMail/LeerMensaje.php',
      mensaje,
      { responseType: 'text' }
    );
  }

  borrarMensaje(mensaje: Correo) {
    //Hace un update por eso post
    return this.httpClient.delete(
      'http://moralo.atwebpages.com/serviciosMail/eliminarMail.php?id=' + mensaje.id
    );
  }

  loegeoUsuario(pwd: string): Observable<string> {
    //Hace un update por eso post
    return this.httpClient.get<string>(
      'http://moralo.atwebpages.com/serviciosMail/logeoMail.php?pwd=' + pwd
    );
  }
}

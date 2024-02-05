import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Chat } from './chat';
import { Usuario } from './usuario';
import { MensajePriv } from './mensaje-priv';

@Injectable({
  providedIn: 'root',
})
export class ServicioChatService {
  // altaMensaje(mensaje: any): Observable<any> {
  //   return this.http.post(`${this.url}AltaMensaje.php`, mensaje);
  // }
  // obtenerMensajes(): Observable<any> {
  //   return this.http.get(`${this.url}ObtenerMensajes.php`);
  // }
  // altaUsuario(usuario: any): Observable<any> {
  //   return this.http.post(`${this.url}AltaUsuario.php`, usuario);
  // }
  // seleccionarUsuario(email: string, pwd: string): Observable<any> {
  //   return this.http.get(`${this.url}SeleccionarUsuario.php?email=${email}&pwd=${pwd}`);
  // }

  private url = 'http://moralo.atwebpages.com/menuAjax/chat/';

  insertarMensaje(mensaje: Chat) {
    let fecha = new Date();

    mensaje.fecha = formatDate(fecha, 'HH:mm:ss/dd-MM-yyyy', this.locale);
    return this.http.put<Chat>(`${this.url}AltaMensaje.php`, mensaje);
  }

  leerMensajes(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}ObtenerMensajes.php`);
  }

  seleccionarUsuario(email: string, pwd: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      `${this.url}SeleccionarUsuario.php?email=${email}&pwd=${pwd}`
    );
  }

  altaUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}AltaUsuario.php`, usuario);
  }

  activarMensaje(mensaje: Chat) {
    return this.http.put<Chat>(
      'http://moralo.atwebpages.com/chat/ActivarMensaje.php',
      mensaje
    );
  }

  bloquearMensaje(mensaje: Chat) {
    return this.http.put<Chat>(
      'http://moralo.atwebpages.com/chat/BloquearMensaje.php',
      mensaje
    );
  }

  obtenerMensajes(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}ObtenerMensajes.php`);
  }

  obtenerMensajesActivos(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}ObtenerMensajes2.php`);
  }

  activarUsuario(usuario: Usuario) {
    // alert('ACTIVAR Usuario: ' + usuario.idUsuario);

    return this.http.put<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php', usuario);
  }

  bloquearUsuario(usuario: Usuario) {
    // alert('DESACTIVAR Usuario: ' + usuario.activo);
    return this.http.put<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php', usuario);
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}ObtenerUsuarios.php`);
  }

  //PARTE PRIVADA

  obtenerMensajesPrivados(usuario: string): Observable<MensajePriv[]> {
    return this.http.get<MensajePriv[]>(
      `${this.url}ObtenerMensajesP.php?usuario=${usuario}`
    );
  }

  obtenerUsuariosP(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}ObtenerUsuarios2.php`);
  }

  altaMensajePrivado(mensaje: MensajePriv): Observable<MensajePriv> {
    let fecha = new Date();

    mensaje.fecha = formatDate(fecha, 'HH:mm:ss/dd-MM-yyyy', this.locale);
    return this.http.put<MensajePriv>(`${this.url}AltaMensajeP.php`, mensaje);
  }

  obtenerMensajesEnviados(usuario: string): Observable<MensajePriv[]> {
    return this.http.get<MensajePriv[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario='+usuario
    );
  }

  obtenerMensajesRecibidos(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}ObtenerMensajesP.php`);
  }

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  // altaMensaje(mensaje: any): Observable<any> {
  //   return this.http.post(`${this.url}AltaMensaje.php`, mensaje);
  // }

  // obtenerMensajes(): Observable<any> {
  //   return this.http.get(`${this.url}ObtenerMensajes.php`);
  // }

  // altaUsuario(usuario: any): Observable<any> {
  //   return this.http.post(`${this.url}AltaUsuario.php`, usuario);
  // }

  // seleccionarUsuario(email: string, pwd: string): Observable<any> {
  //   return this.http.get(`${this.url}SeleccionarUsuario.php?email=${email}&pwd=${pwd}`);
  // }
}

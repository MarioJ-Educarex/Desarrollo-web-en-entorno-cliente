import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Chat } from './chat';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioChatService {

  private url = 'http://moralo.atwebpages.com/menuAjax/chat/';

  insertarMensaje(mensaje: Chat) {
    let fecha = new Date();

    mensaje.fecha = formatDate(fecha, 'HH:mm:ss/dd-MM-yyyy', this.locale);
    return this.http.put<Chat>(`${this.url}AltaMensaje.php`, mensaje);
  }

  leerMensajes(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}ObtenerMensajes.php`);
  }

  seleccionarUsuario(email: string, pwd: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${this.url}SeleccionarUsuario.php?email=${email}&pwd=${pwd}`
    );
  }

  altaUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}AltaUsuario.php`, usuario);
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

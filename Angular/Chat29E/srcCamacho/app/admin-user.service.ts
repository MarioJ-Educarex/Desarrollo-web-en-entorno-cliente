
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private httpCliente:HttpClient) { }

  activarUsuario(usuario:Usuario){
    return this.httpCliente.
    post<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php',usuario)
  }
  bloquearUsuario(usuario:Usuario){
    return this.httpCliente.
    post<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php',usuario)
  }
  leerMensajes() : Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php')
  }
  leerUsuarios(): Observable<Usuario[]>
  {
    return this.httpCliente.get<Usuario[]>('http://moralo.atwebpages.com/chat/ObtenerUsuarios.php')

  }
}

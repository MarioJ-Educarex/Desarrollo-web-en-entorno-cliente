
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class ServAdminService {

  constructor(private httpCliente:HttpClient) { }
  bloquearMensaje(msj:Mensaje){
    console.log(msj.id);
    console.log("id mensaje"+JSON.stringify(msj))
    let db = JSON.stringify(msj);
     var db2 = JSON.parse(db);
     console.log("parse:"+db2);
      return this.httpCliente.
      post<Mensaje>('http://moralo.atwebpages.com/chat/BloquearMensaje.php',msj);
  }
  activarMensaje(msj:Mensaje){
    return this.httpCliente.
    post<Mensaje>('http://moralo.atwebpages.com/chat/ActivarMensaje.php',msj);
  }
  bloquearUsuario(id:number){
    return this.httpCliente.
    post<Usuario>('http://moralo.atwebpages.com/chat/BajaUsuario.php/?id=',id)
  }
  leerMensajes() : Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php')
  }
  leerUsuarios(): Observable<Usuario[]>
  {
    return this.httpCliente.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php')

  }
}

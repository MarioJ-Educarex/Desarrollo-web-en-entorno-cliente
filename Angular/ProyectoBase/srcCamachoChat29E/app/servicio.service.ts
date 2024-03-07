import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  listarUsuarios():Observable<Usuario[]> {
   return this.httpCliente.get<Usuario[]>
   ('http://moralo.atwebpages.com/chat/ObtenerUsuarios.php');
  }

  insertarMensaje(mensaje: Mensaje) {
    let fecha=new Date();

    mensaje.fecha=fecha.toString().split(' ')[4]+'/'+fecha.toLocaleString().replace('/','-').replace('/','-')
   return this.httpCliente.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje)
  }
  leerMensajes() : Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes2.php')
  }

  constructor(private httpCliente:HttpClient) { }
  registrarUsuario(us:Usuario):Observable<Usuario>{
    console.log("registrar servicio: "+us.pwd)
   return this.httpCliente.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',us)
  }
  logearUsuario(user:Usuario):Observable<Usuario[]>{
    console.log("mail en  servicio "+user.email)
    return this.httpCliente.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd)
  }
}

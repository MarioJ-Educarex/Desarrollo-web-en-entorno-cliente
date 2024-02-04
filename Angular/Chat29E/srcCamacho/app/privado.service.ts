import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { MensajeP } from './mensaje-p';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PrivadoService {
  leerMensajesE(miParametro: string):Observable<MensajeP[]> {
    console.log("parametro"+miParametro)
    return this.httpClienteP.get<MensajeP[]>
    ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario='+miParametro);
  }
  constructor(private httpClienteP:HttpClient,@Inject(LOCALE_ID) public locale: string){}
  insertarMensajeP(msjchatP: MensajeP) {
    let fecha=new Date();

    msjchatP.fecha=formatDate(fecha,"HH:mm:ss/dd-MM-yyyy",this.locale);
    return this.httpClienteP.put<MensajeP>
    ('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',msjchatP);
  }
  leerMensajesP(nombre:string):Observable<MensajeP[]> {
    console.log("nombre:"+nombre);

    return this.httpClienteP.get<MensajeP[]>
    ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+nombre);
  }
  listarTodosUsuarios():Observable<Usuario[]>{
    return this.httpClienteP.get<Usuario[]>
    ('http://moralo.atwebpages.com/chat/ObtenerUsuarios2.php');
  }

}

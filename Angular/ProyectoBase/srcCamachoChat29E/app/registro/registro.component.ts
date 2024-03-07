import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private servicio:ServicioService ){}
  usuario:Usuario=new Usuario();
Registrar() {
  this.servicio.registrarUsuario(this.usuario).subscribe((us:Usuario)=>this.usuario=us)
}

}

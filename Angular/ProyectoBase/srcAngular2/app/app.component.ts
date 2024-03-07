import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  nombreCiclo:string="DAW";
  nombreCompleto:string="Desarrollo de Aplicaciones WEB"
  nombreUsuario:string="";
  country=["Gales","Francia","Italia","Inglaterra","Escocia","Irlanda"]

  cambiarNombre(){
    this.nombreCiclo=this.nombreCompleto;
  }
  retornarNombre(){
    this.nombreCiclo="DAW";
  }
  obtenerNombre(nombre:string){
   this.nombreUsuario=nombre;
  }
}

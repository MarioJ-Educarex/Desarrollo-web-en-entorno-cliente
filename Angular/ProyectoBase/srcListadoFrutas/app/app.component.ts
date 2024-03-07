import { Component } from '@angular/core';
import { Fruta } from './fruta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listadoFrutas';

  // constructor(private httpServicios:ServicioService){
  //   this.httpServicios.leerProductos().subscribe((result:Fruta[])=>this.frutas=result)
  // }
}

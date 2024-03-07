import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  decimas: number = 0;

  actualizarD(event: any) {
    this.decimas = event.dec;
  }
  actualizarM(event: any) {
    this.minutos = event.min;
  }
  actualizarH(event: any) {
    this.horas = event.hor;
  }
  actualizarS(event: any) {
    this.segundos = event.seg;
  }
}

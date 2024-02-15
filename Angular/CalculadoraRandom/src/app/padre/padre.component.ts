import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  resultadoSuma: number = 0;
  resultadoDivision: number = 0;
  resultadoResta: number = 0;
  resultadoMutl: number = 0;

  dividir(event: any) {
    this.resultadoDivision = event.resultDivision;
  }
  sumar(event: any) {
    this.resultadoSuma = event.resultSuma;
  }
  restar(event: any) {
    this.resultadoResta = event.resultResta;
  }
  multiplicar(event: any) {
    this.resultadoMutl = event.resultProducto;
  }
  numero1!: number;
  numero2!: number;

  constructor() {
    this.numero1 = Math.round(Math.random() * 100);
    this.numero2 = Math.round(Math.random() * 100);
  }

  generar() {
    window.location.reload();
  }
}

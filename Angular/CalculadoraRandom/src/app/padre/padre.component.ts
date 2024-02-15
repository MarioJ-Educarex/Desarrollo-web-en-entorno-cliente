import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  ngOnInit(): void {}
  recargar() {
    window.location.reload();
  }
  recibir1(event: any) {
    this.numero1 = event.Num1Aleat;
  }
  recibir2(event: any) {
    this.numero2 = event.Num2Aleat;
  }
  generar() {
    this.suma = this.numero1 + this.numero2;
    this.producto = this.numero1 * this.numero2;
  }
  numero1: number = 0;
  numero2: number = 0;
  suma: number = 0;
  producto: number = 0;
}

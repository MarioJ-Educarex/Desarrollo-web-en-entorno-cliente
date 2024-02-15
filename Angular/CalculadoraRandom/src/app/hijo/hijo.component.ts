import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  ngOnInit(): void {
    this.cargar();
  }
  @Input() numeroRandom1 = 0;
  @Input() numeroRandom2 = 0;

  @Output() suma = new EventEmitter();
  @Output() producto = new EventEmitter();
  @Output() resta = new EventEmitter();
  @Output() division = new EventEmitter();

  resultadoS: number = 0;
  resultadoP: number = 0;
  resultadoD: number = 0;
  resultadoR: number = 0;

  cargar() {
    this.resultadoS = this.numeroRandom1 + this.numeroRandom2;
    this.suma.emit({ resultSuma: this.resultadoS });

    this.resultadoP = this.numeroRandom1 * this.numeroRandom2;
    this.producto.emit({ resultProducto: this.resultadoP });

    if (this.numeroRandom2 == 0) {
      this.division.emit({
        resultDivision: 'INDETERMINACIÓN AL DIVIDIR POR 0',
      });
    } else {
      this.resultadoD = this.numeroRandom1 / this.numeroRandom2;
      this.division.emit({ resultDivision: this.resultadoD });
    }

    this.resultadoR = this.numeroRandom1 - this.numeroRandom2;
    this.resta.emit({ resultResta: this.resultadoR });
  }
}

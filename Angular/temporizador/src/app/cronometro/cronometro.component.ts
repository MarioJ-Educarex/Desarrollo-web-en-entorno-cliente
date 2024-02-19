import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  @Input() inicio: number = 0;
  @Output() actualizarD = new EventEmitter();
  @Output() actualizarH = new EventEmitter();
  @Output() actualizarM = new EventEmitter();
  @Output() actualizarS = new EventEmitter();

  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.inicio++;
      this.actualizarD.emit({ dec: this.inicio });

      if (this.inicio == 10) {
        this.inicio = 0;
        this.segundos++;
        this.actualizarS.emit({ seg: this.segundos });
      }
      if (this.segundos == 60) {
        this.segundos = 0;
        this.minutos++;
        this.actualizarM.emit({ min: this.minutos });
      }
      if (this.minutos == 60) {
        this.minutos = 0;
        this.horas++;
        this.actualizarH.emit({ hor: this.horas });
      }
    }, 100);
  }
}

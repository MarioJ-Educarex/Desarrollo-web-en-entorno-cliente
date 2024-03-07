import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component {
  constructor() {
    this.temporizador();
  }

  title = 'Angular Temporizador';

  segundos: number = 0;

  temp: NodeJS.Timeout | undefined;
  temporizador() {
    this.temp = setInterval(() => {
      this.segundos = new Date().getSeconds();
    }, 100);
  }

  iniciar() {
    if (this.temp) {
      clearInterval(this.temp);
      this.temp = undefined;
    }
  }

  parar() {
    if (!this.temp) {
      this.temporizador();
    }
  }
}

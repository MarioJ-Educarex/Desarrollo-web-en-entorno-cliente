import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css'],
})
export class HuertoComponent {
  mensajeHortaliza: string = '';
  mensajeFrutal: string = '';
}

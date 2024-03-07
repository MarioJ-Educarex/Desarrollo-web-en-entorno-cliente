import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css'],
})
export class Componente4Component {
  constructor() {}

  add(texto: HTMLInputElement, tabla: HTMLTableElement) {
    tabla.innerHTML += '<tr><td>' + texto.value + '<tr><td>';
    texto.value = '';
  }
}

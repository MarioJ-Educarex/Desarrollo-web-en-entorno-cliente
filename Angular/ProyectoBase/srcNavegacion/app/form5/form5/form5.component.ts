import { Component } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css'],
})
export class Form5Component {
  cargarClasePrincipal(event: any) {
    this.claseRecibida = event.ordenHijo;
  }
  title = 'ngClass';
  clase: string = '';
  claseRecibida: string = '';
}

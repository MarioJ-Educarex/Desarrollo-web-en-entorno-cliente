import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css'],
})
export class HortalizaComponent {
  @Input() mensajeParaHortaliza: string = '';
}

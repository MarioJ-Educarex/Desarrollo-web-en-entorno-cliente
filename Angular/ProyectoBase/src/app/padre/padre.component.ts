import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  cadena1: string = '';
  cadena2: string = '';
  ngOnInit(): void {}
  // recargar() {
  //   window.location.reload();
  // }
  recibir1(event: any) {
    this.cadena1 =
      'https://randomuser.me/api/portraits/women/' + event.Num1Aleat + +'.jpg';
  }
  recibir2(event: any) {
    this.cadena2 =
    'https://randomuser.me/api/portraits/men/' + event.Num2Aleat + +'.jpg';
  }

}

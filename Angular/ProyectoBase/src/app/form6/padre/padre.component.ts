import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  cadena1: string = '';
  cadena2: string = '';
  Num: number = 0;
  ngOnInit(): void {}
  // recargar() {
  //   window.location.reload();
  // }
  recibir2(event: any) {
    this.Num = event.Num2Aleat;
    this.cadena2 =
      'https://randomuser.me/api/portraits/men/' + this.Num + '.jpg';
  }
}

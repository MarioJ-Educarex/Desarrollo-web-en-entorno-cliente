import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css'],
})
export class HuertoComponent {
  mensajeDeFrutal: string = '';
  peticionesPlantones: number = 0;

  mensajeHortaliza: string = '';
  mensajeFrutal: string = '';
  mensajeDeHortaliza: string = '';
  peticionesSemilla: number = 0;

  constructor() {}

  ngOnInit(): void {}

  actualizarNumeroPlantones(event: any) {
    this.peticionesPlantones = event.plantones;
  }
  actualizaMensajeDeFrutal(event: any) {
    this.mensajeDeFrutal = event.mensaje;
  }
  actualizarNumeroSemilleros(event: any) {
    this.peticionesSemilla = event.semilleros;
  }
  actualizaMensajeDeHortaliza(event: any) {
    this.mensajeDeHortaliza = event.mensaje;
  }
}

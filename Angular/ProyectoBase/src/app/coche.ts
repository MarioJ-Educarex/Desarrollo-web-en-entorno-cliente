export class Coche {
  matricula!: string;
  motor!: string;
  climatizador!: Boolean;
  cargadorElectrico!: Boolean;
  gps!: Boolean;
  neumaticos!: string;

  constructor(matricula: string, motor: string, climatizador: Boolean, cargadorElectrico: Boolean, gps: Boolean, neumaticos: string) {
    // this.matricula = matricula;
    // this.motor = motor;
    // this.climatizador = climatizador;
    // this.cargadorElectrico = cargadorElectrico;
    // this.gps = gps;
    // this.neumaticos = neumaticos;
  }

  // constructor() {
  //   this.matricula = '';
  //   this.motor = '';
  //   this.climatizador = false;
  //   this.cargadorElectrico = false;
  //   this.gps = false;
  //   this.neumaticos = '';
  // }
}

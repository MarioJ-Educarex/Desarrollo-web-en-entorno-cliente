export class Correo {
  id!: number;
  origen!: string;
  destinatario!: string;
  mensaje!: string;
  asunto!: string;
  fecha!: string;
  leido!: number;

  constructor(
    id: number,
    origen: string,
    destinatario: string,
    mensaje: string,
    asunto: string,
    fecha: string,
    leido: number
  ) {}
}

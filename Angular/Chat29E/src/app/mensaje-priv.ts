export class MensajePriv {
  id!: number;
  fecha!: string;
  usuario!: string;
  mensaje!: string;
  activo!: number;
  destinatario!: string;
  constructor(
    id: number,
    fecha: string,
    usuario: string,
    mensaje: string,
    activo: number,
    destinatario: string
  ) {}
}

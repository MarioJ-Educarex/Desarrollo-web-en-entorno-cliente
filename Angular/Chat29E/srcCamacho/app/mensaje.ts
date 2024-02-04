export class Mensaje {
  id!: number;
  fecha!: string;
  usuario!: string;
  mensaje!: string;
  activo!:number;
  constructor(id:number,fecha:string,usuario:string,mensaje:string,activo:number){}
}

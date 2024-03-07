import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { MensajeP } from '../mensaje-p';
import { PrivadoService } from '../privado.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {
  texto!: string;
  miParametro!: string;

mandar() {
 console.log("has pulsado enter")
this.InsertarMensaje();
    //  this.datos.push(new Mensaje(0,this.miParametro,"",this.msjchat.mensaje));
    //  this.datasource.data=this.datos;
    //  console.log("this.datos"+this.datos[0].mensaje)
    //  this.tabla1.renderRows();
    //  this.msjchat = new Mensaje(0, "","","");
}
cerrarSesion() {
   this.miParametro="sesión cerrada";
   sessionStorage.removeItem('Nombre');
   this.datasource=new MatTableDataSource<MensajeP>();

}

msjchat: MensajeP={
 id:0,
 usuario:'',
 fecha:'',
 mensaje:'',
 destinatario:'',
 activo:1
}

  datasource=new MatTableDataSource<MensajeP>();
  mensaje!: MensajeP;
datos: MensajeP[] =[];
columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje','destinatario'];
@ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<MensajeP>;
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();

  if (this.datasource.paginator) {
    this.datasource.paginator.firstPage();
}
}
constructor( private httpCliente: PrivadoService){

 }
  ngOnInit(): void {
    if (sessionStorage.getItem('Nombre')==null){
    this.datasource=new MatTableDataSource<MensajeP>();
    }else{
this.miParametro=sessionStorage.getItem('Nombre')||"";
      this.httpCliente.leerMensajesP(this.miParametro).subscribe(
        (result:MensajeP[])=>{
          this.datos=result;
          this.datasource.data=result;
          this.datasource.paginator=this.paginator;
          this.datasource.sort=this.sort;});
          console.log("usuario"+sessionStorage.getItem('Nombre'))
          this.miParametro=sessionStorage.getItem('Nombre') || "";

    }

  }
  InsertarMensaje() {
    // this.servicio.insertarMensaje(this.mensaje).subscribe((x:Chat)=>{this.mensaje=x;
    // this.LeerMensajes();})
    this.msjchat.usuario=this.miParametro;
    console.log("entro en insertar mensaje");
    if (sessionStorage.getItem('Nombre')==this.miParametro)
    {
      console.log("mensaje: "+this.msjchat.mensaje)
      this.httpCliente.insertarMensajeP(this.msjchat).
      subscribe(()=>{

  //  this.ngOnInit();
       this.httpCliente.leerMensajesP(this.miParametro).
        subscribe((result:MensajeP[])=>
       { this.datos=result;
         this.datasource.data=result;
         this.datasource.paginator=this.paginator;
         this.datasource.sort=this.sort;
         this.tabla1.renderRows();
       });
      console.log("renderizar")
      this.datasource._updateChangeSubscription;
     // this.tabla1.renderRows();
      this.msjchat.mensaje="";

  })}
}
}

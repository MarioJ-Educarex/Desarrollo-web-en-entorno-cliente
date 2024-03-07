import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Mensaje } from '../mensaje';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
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
   this.datasource=new MatTableDataSource<Mensaje>();

}

msjchat: Mensaje={
 id:0,
 usuario:'',
 fecha:'',
 mensaje:'',
 activo:1
}

  datasource=new MatTableDataSource<Mensaje>();
  mensaje!: Mensaje;
datos: Mensaje[] =[];
columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje'];
@ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Mensaje>;
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.datasource.filter = filterValue.trim().toLowerCase();

  if (this.datasource.paginator) {
    this.datasource.paginator.firstPage();
}
}
constructor( private httpCliente: ServicioService){

 }
  ngOnInit(): void {
    if (sessionStorage.getItem('Nombre')==null){
    this.datasource=new MatTableDataSource<Mensaje>();
    }else{

      this.httpCliente.leerMensajes().subscribe(
        (result:Mensaje[])=>{
          this.datos=result;this.datasource.data=result;
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
    if (sessionStorage.getItem('Nombre')==this.miParametro)
    {

      this.httpCliente.insertarMensaje(this.msjchat).
      subscribe(()=>{
        this.httpCliente.leerMensajes().
        subscribe((result:Mensaje[])=>{
          this.datos=result;
          this.datasource.data=result;
          this.datasource.paginator=this.paginator;
          this.datasource.sort=this.sort;
          this.tabla1.renderRows();});

          this.datasource._updateChangeSubscription;

          this.msjchat.mensaje="";
        }

      );}
    //this.ngOnInit();

}


}

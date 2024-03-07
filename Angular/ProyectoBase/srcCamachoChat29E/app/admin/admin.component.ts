
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ServAdminService } from '../serv-admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
cerrarSesion() {
  sessionStorage.removeItem('Nombre');
this.datasource=new MatTableDataSource<Mensaje>();
}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Mensaje>;
activar(msj: Mensaje) {
  this.httpCliente.activarMensaje(msj).subscribe(
    ()=>{
  this.httpCliente.leerMensajes().subscribe(
    (result:Mensaje[])=>{this.datos=result;this.datasource.data=result;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  this.tabla1.renderRows();});
});

}


mandar() {
}
bloquear(msj: Mensaje) {
  this.httpCliente.bloquearMensaje(msj).subscribe(
    ()=>{
      this.httpCliente.leerMensajes().subscribe(
        (result:Mensaje[])=>{
        this.datos=result;this.datasource.data=result;
        this.datasource.paginator=this.paginator;
        this.datasource.sort=this.sort;
        this.tabla1.renderRows();});
    }
  );



    }

  msjchat: Mensaje={
    id:0,
    usuario:'',
    fecha:'',
    mensaje:'',
    activo:0
   }

     datasource=new MatTableDataSource<Mensaje>();
     mensaje!: Mensaje;
   datos: Mensaje[] =[];
   columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje','activo','bloquear','activar'];

  miParametro!: string;
   applyFilter(event: KeyboardEvent) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.datasource.filter = filterValue.trim().toLowerCase();

     if (this.datasource.paginator) {
       this.datasource.paginator.firstPage();
   }
   }
   constructor( private httpCliente: ServAdminService){

    }
     ngOnInit(): void {


         this.httpCliente.leerMensajes().subscribe((result:Mensaje[])=>{this.datos=result;this.datasource.data=result;
           this.datasource.paginator=this.paginator;
           this.datasource.sort=this.sort;});
//segunda tabla


       }

     }

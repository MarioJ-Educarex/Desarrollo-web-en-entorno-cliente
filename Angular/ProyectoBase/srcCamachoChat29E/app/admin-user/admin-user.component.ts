import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Usuario } from '../usuario';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements OnInit{
  datasource=new MatTableDataSource<Usuario>();

cerrarSesion() {
  sessionStorage.removeItem('Nombre');
  this.datasource=new MatTableDataSource<Usuario>();
}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Usuario>;
activarUsuario(user: Usuario) {
  this.httpCliente.activarUsuario(user).subscribe(
    ()=>{
  this.httpCliente.leerUsuarios().subscribe(
    (result:Usuario[])=>{
      this.datos=result;this.datasource.data=result;
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  this.tabla1.renderRows();});
});

}


mandar() {
}
bloquearUsuario(user: Usuario) {
  this.httpCliente.bloquearUsuario(user).subscribe(
    ()=>{
      this.httpCliente.leerUsuarios().subscribe(
        (result:Usuario[])=>{
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
   userChat: Usuario={
    idUsuario:0,
    nombre:'',
    email:'',
    pwd:'',
    activo:0
   }

     mensaje!: Mensaje;
   datos: Usuario[] =[];
   columnas: string[] = ['idUsuario', 'nombre', 'email', 'pwd','activo','bloquear','activar'];

  miParametro!: string;
   applyFilter(event: KeyboardEvent) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.datasource.filter = filterValue.trim().toLowerCase();

     if (this.datasource.paginator) {
       this.datasource.paginator.firstPage();
   }
   }
   constructor( private httpCliente: AdminUserService){

    }
     ngOnInit(): void {


         this.httpCliente.leerUsuarios().subscribe((result:Usuario[])=>{
          this.datos=result;this.datasource.data=result;
           this.datasource.paginator=this.paginator;
           this.datasource.sort=this.sort;});


       }

     }

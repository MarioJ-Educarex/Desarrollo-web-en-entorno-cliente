import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MensajeP } from '../mensaje-p';
import { PrivadoService } from '../privado.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent implements OnInit {
refrescar() {

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
  msjchat: MensajeP={
    id:0,
    usuario:'',
    fecha:'',
    mensaje:'',
    destinatario:'',
    activo:1
   }
  miParametro!: string;
input: any;
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
      this.httpCliente.leerMensajesE(this.miParametro).subscribe(
        (result:MensajeP[])=>{
          console.log("entro en listar enviados")
          this.datos=result;
          this.datasource.data=result;
          this.datasource._updateChangeSubscription;
          this.datasource.paginator=this.paginator;
          this.datasource.sort=this.sort;
          this.tabla1.renderRows();
        });
          console.log("usuario"+sessionStorage.getItem('Nombre'))
          this.miParametro=sessionStorage.getItem('Nombre') || "";

    }

  }
}

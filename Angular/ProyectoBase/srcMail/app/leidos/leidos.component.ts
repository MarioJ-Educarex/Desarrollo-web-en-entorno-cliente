import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Correo } from '../correo';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-leidos',
  templateUrl: './leidos.component.html',
  styleUrls: ['./leidos.component.css']
})
export class LeidosComponent implements OnInit {
  dataSource = new MatTableDataSource<Correo>();
  columnas: string[] = [
    'id',
    'origen',
    'destinatario',
    'mensaje',
    'asunto',
    'fecha',
    'leido',
  ];
  nombreUs: string = 'Mario';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: ServicioClienteService) {
    this.listarMail();
  }

  ngOnInit(): void {
    this.listarMail();
  }

  listarMail() {
    this.httpClient.mostrarMensajesNoLeidos(this.nombreUs).subscribe((mensaje) => {
      this.dataSource.data = mensaje;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

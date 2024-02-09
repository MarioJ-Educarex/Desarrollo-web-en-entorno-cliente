import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Correo } from '../correo';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-recibir-mail',
  templateUrl: './recibir-mail.component.html',
  styleUrls: ['./recibir-mail.component.css'],
})
export class RecibirMailComponent implements OnInit {
  dataSource = new MatTableDataSource<Correo>();
  columnas: string[] = [
    'id',
    'origen',
    'destinatario',
    'mensaje',
    'asunto',
    'fecha',
    'leido',
    'leer',
    'borrar'
  ];
  nombreUs: string = 'Mario';

  mail: Correo = {
    id: 0,
    origen: this.nombreUs,
    destinatario: '',
    mensaje: '',
    asunto: '',
    fecha: new Date().toString(),
    leido: 0,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: ServicioClienteService) {
    this.listarMail();
  }

  ngOnInit(): void {
    this.listarMail();
  }

  listarMail() {
    this.httpClient.mostrarTodosMensajes(this.nombreUs).subscribe((mensaje) => {
      this.dataSource.data = mensaje;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  leer(mensage: Correo) {
    this.httpClient.leerMensaje(mensage).subscribe((mensaje) => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.listarNoLeidos();
    });
  }

  listarNoLeidos() {
    this.httpClient
      .mostrarMensajesNoLeidos(this.nombreUs)
      .subscribe((mensaje) => {
        this.dataSource.data = mensaje;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  borrarMensaje(mensaje: Correo) {
    this.httpClient.borrarMensaje(mensaje).subscribe(() => {
      this.listarMail();
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

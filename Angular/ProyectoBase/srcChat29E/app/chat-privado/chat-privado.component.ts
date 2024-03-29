import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';
import { MensajePriv } from '../mensaje-priv';

@Component({
  selector: 'app-chat-privado',
  templateUrl: './chat-privado.component.html',
  styleUrls: ['./chat-privado.component.css'],
})
export class ChatPrivadoComponent implements OnInit {
  miParametro: string = sessionStorage.getItem('Nombre') || '';
  // msjchat = { mensaje: '' };

  msjchat: MensajePriv = {
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: '',
    destinatario: '',
    activo: 1,
  };
  datos: MensajePriv[] = [];

  cerrarSesion() {
    this.miParametro = 'sesión cerrada';
    sessionStorage.removeItem('Nombre');
    this.dataSource = new MatTableDataSource<MensajePriv>();
  }

  columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];
  columnas2: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];
  dataSource = new MatTableDataSource<MensajePriv>();
  dataSource2 = new MatTableDataSource<MensajePriv>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private httpCliente: ServicioChatService,
    private router: Router
  ) {
    if (this.miParametro == sessionStorage.getItem('Nombre')) {
      this.gestionMensajesRecibido();
    }
    this.gestionMensajesEnviados();
  }
  ngOnInit(): void {
    if (this.miParametro == sessionStorage.getItem('Nombre')) {
      this.gestionMensajesRecibido();
    }
    this.gestionMensajesEnviados();
  }

  gestionMensajesRecibido() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente
      .obtenerMensajesPrivados(this.miParametro)
      .subscribe((x) => {
        //listacompleta que inyecta datos al atributo datasource de tabla
        this.dataSource.data = x;
        //filtro de paginación
        this.dataSource.paginator = this.paginator;
        //filtro para ordenación
        this.dataSource.sort = this.sort;
      });
  }

  gestionMensajesEnviados() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente
      .obtenerMensajesEnviados(this.miParametro)
      .subscribe((x) => {
        console.log(x);

        //listacompleta que inyecta datos al atributo datasource de tabla
        this.dataSource2.data = x;
        //filtro de paginación
        this.dataSource2.paginator = this.paginator;
        //filtro para ordenación
        this.dataSource2.sort = this.sort;
        this.dataSource._updateChangeSubscription;

      });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mandar() {
    if (this.miParametro == sessionStorage.getItem('Nombre')) {
      const nuevoMensaje: MensajePriv = {
        id: 0,
        usuario: 'Mario',
        fecha: '',
        mensaje: this.msjchat.mensaje,
        destinatario: this.msjchat.destinatario,
        activo: 1,
      };

      this.httpCliente.altaMensajePrivado(nuevoMensaje).subscribe(() => {
        this.httpCliente
          .obtenerMensajesPrivados(this.miParametro)
          .subscribe((result: MensajePriv[]) => {
            this.datos = result;
            this.dataSource2.data = result;
            this.dataSource2.paginator = this.paginator;
            this.dataSource2.sort = this.sort;
            this.dataSource2._updateChangeSubscription;
          });
        this.msjchat.mensaje = '';
      });
    }
  }
}

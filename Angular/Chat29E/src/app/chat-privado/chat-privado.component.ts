import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-chat-privado',
  templateUrl: './chat-privado.component.html',
  styleUrls: ['./chat-privado.component.css']
})
export class ChatPrivadoComponent {
  miParametro: string = sessionStorage.getItem('Nombre') || '';
  msjchat = { mensaje: '' };

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  columnas: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];
  columnas2: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];
  dataSource = new MatTableDataSource<Chat>();
  dataSource2 = new MatTableDataSource<Chat>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private httpCliente: ServicioChatService,
    private router: Router
  ) {
    this.gestionMensajesRecibido();
    this.gestionMensajesEnviados();
  }

  gestionMensajesRecibido() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente.obtenerMensajesPrivados(this.miParametro).subscribe((x) => {
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
    this.httpCliente.obtenerMensajesEnviados().subscribe((x) => {
      //listacompleta que inyecta datos al atributo datasource de tabla
      this.dataSource2.data = x;
      //filtro de paginación
      this.dataSource2.paginator = this.paginator;
      //filtro para ordenación
      this.dataSource2.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mandar() {
    if (this.miParametro) {
      const nuevoMensaje: Chat = {
        mensaje: this.msjchat.mensaje,
        id: 0,
        usuario: this.miParametro,
        fecha: '',
      };

      this.httpCliente.altaMensajePrivado(nuevoMensaje).subscribe(() => {
        this.msjchat.mensaje = '';
        this.gestionMensajesRecibido();
      });
    }
  }
}

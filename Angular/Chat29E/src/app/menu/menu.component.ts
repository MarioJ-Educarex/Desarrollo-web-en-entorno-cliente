import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  miParametro: string = sessionStorage.getItem('Nombre') || '';
  msjchat = { mensaje: '' };

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  columnas: string[] = [
    'id',
    'fecha',
    'usuario',
    'mensaje',
    'activo',
    'bloquear',
    'activar',
  ];
  columnasUs: string[] = [
    'idUsuario',
    'nombre',
    'email',
    'pwd',
    'activo',
    'bloquear',
    'activar',
  ];
  dataSource = new MatTableDataSource<Chat>();
  dataSource2 = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private httpCliente: ServicioChatService,
    private router: Router
  ) {
    this.gestionMensajes();
    this.gestionUsuarios();
  }

  gestionMensajes() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente.leerMensajes().subscribe((x) => {
      //listacompleta que inyecta datos al atributo datasource de tabla
      this.dataSource.data = x;
      //filtro de paginación
      this.dataSource.paginator = this.paginator;
      //filtro para ordenación
      this.dataSource.sort = this.sort;
    });
  }

  gestionUsuarios() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente.obtenerUsuarios().subscribe((x) => {
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

      this.httpCliente.insertarMensaje(nuevoMensaje).subscribe(() => {
        this.msjchat.mensaje = '';
        this.gestionMensajes();
      });
    }
  }


  activarMsg(idMensaje: string) {
    console.log("activarMsg: "+idMensaje);
    this.httpCliente.activarMensaje(idMensaje).subscribe(
      (response) => {
        console.log('Hola Mensaje activado', response);
      },
      (error) => {
        console.error('Hola Error al activar el mensaje', error);


      }
    );
  }
  bloquearMsg(idMensaje: string) {
    console.log("activarMsg: "+idMensaje);

    this.httpCliente.bloquearMensaje(idMensaje).subscribe(
      (response) => {
        console.log('Hola Mensaje bloqueado', response);
      },
      (error) => {
        console.error('Hola Error al bloquear el mensaje', error);
      }
    );
  }

  bloquearUsuario(idUsuario: Usuario) {
    // const usuario = { idUsuario: Number(idUsuario) }; // Asume que Usuario solo necesita idUsuario
    this.httpCliente.bloquearUsuario(idUsuario).subscribe(
      (response) => {
        console.log('Usuario bloqueado', response);
      },
      (error) => {
        console.error('Error al bloquear el usuario', error);
      }
    );
  }
  activarUsuario(idUsuario: Usuario) {
    // const usuario = { idUsuario: Number(idUsuario) }; // Asume que Usuario solo necesita idUsuario
    this.httpCliente.activarUsuario(idUsuario).subscribe(
      (response) => {
        console.log('Usuario activado', response);
      },
      (error) => {
        console.error('Error al activar el usuario', error);
      }
    );
  }
}

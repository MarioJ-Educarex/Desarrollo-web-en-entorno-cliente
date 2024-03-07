import { Component } from '@angular/core';
import { ServicioChatService } from 'servicio-chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';

  eliminar(id: string) {
    this.httpCliente
      .eliminarProducto(id)
      .subscribe((result) => (this.Chats = result));

      this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.Chats = result));
  }

  seleccionar(Chat: Chat) {
    // this.httpCliente
    //   .modificarProducto(Chat)
    //   .subscribe((result) => (this.Chats = result));
    this.selectedProduct=Chat;
  }

  //   selectedProduct: Chat = {
  //   id: '',
  //   nombre: '',
  //   precio: 0,
  //   unidades:0,
  //   imagen:''
  // }

  //   crear(Chat: Chat) {
  //     this.httpCliente.crearProductos(Chat).subscribe((result) => (this.Chats = result));
  //   }

  // actualizarProducto(_t46: any) {}
  actualizarProducto(form: { value: Chat }) {
    console.log('estoy en ts ' + form.value.id);
    this.httpCliente.actualizarProductos(form.value).subscribe((producto: Chat) => {
      this.prod = producto;
    });
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.Chats = result));
  }

  crear(form: { value: Chat }) {
    console.log('estoy en ts ' + form.value.id);
    this.httpCliente.crearProductos(form.value).subscribe((producto: Chat) => {
      this.prod = producto;
    });
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.Chats = result));
  }
  prod!: Chat;
  selectedProduct: Chat = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: '',
  };

  Chats!: Chat[];

  constructor(private httpCliente: ServicioFService) {
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.Chats = result));
    // this.httpCliente.crearProducto().subscribe(result=>this.Chats=result);
  }
}

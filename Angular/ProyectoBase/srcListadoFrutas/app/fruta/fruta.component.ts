import { Component } from '@angular/core';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css'],
})
export class FrutaComponent {
  eliminar(id: string) {
    this.httpCliente
      .eliminarProducto(id)
      .subscribe((result) => (this.frutas = result));

      this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.frutas = result));
  }

  seleccionar(fruta: Fruta) {
    // this.httpCliente
    //   .modificarProducto(fruta)
    //   .subscribe((result) => (this.frutas = result));
    this.selectedProduct=fruta;
  }

  //   selectedProduct: Fruta = {
  //   id: '',
  //   nombre: '',
  //   precio: 0,
  //   unidades:0,
  //   imagen:''
  // }

  //   crear(fruta: Fruta) {
  //     this.httpCliente.crearProductos(fruta).subscribe((result) => (this.frutas = result));
  //   }

  // actualizarProducto(_t46: any) {}
  actualizarProducto(form: { value: Fruta }) {
    console.log('estoy en ts ' + form.value.id);
    this.httpCliente.actualizarProductos(form.value).subscribe((producto: Fruta) => {
      this.prod = producto;
    });
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.frutas = result));
  }

  crear(form: { value: Fruta }) {
    console.log('estoy en ts ' + form.value.id);
    this.httpCliente.crearProductos(form.value).subscribe((producto: Fruta) => {
      this.prod = producto;
    });
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.frutas = result));
  }
  prod!: Fruta;
  selectedProduct: Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: '',
  };

  frutas!: Fruta[];

  constructor(private httpCliente: ServicioFService) {
    this.httpCliente
      .leerProductos()
      .subscribe((result) => (this.frutas = result));
    // this.httpCliente.crearProducto().subscribe(result=>this.frutas=result);
  }
}

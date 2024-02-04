import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  cars: Usuario[]=[];
  constructor(private servicio:ServicioService){}
  ngOnInit(): void {
   this.servicio.listarUsuarios().subscribe(
    (result:Usuario[])=>{
      this.cars=result;
   }
   )

  }

}

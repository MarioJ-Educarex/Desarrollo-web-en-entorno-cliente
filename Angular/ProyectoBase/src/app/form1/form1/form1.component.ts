import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Coche } from 'srcFormReacCoches/app/coche';
import { ServicioAutoService } from 'srcFormReacCoches/app/servicio-auto.service';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit {
mostrarImagen($event: Event) {
throw new Error('Method not implemented.');
}
  numeros: number[] = Array.from({ length: 300 }, (_, i) => i + 1);
  edades: number[] = Array.from({ length: 48 }, (_, i) => i + 18);

  miformulario!: FormGroup;

  empleados: Empleado[] = [];


  constructor(
    private fb: FormBuilder,
    private empleadoService: ServicioEmpleadoService
  ) {

    this.miformulario = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe((empleados) => {
      this.empleados = empleados;
    });
  }

  EnviarDatos() {
    if (this.miformulario.valid) {
      console.log(this.miformulario.value);

      const nuevoEmpleado = this.miformulario.value;
      this.empleadoService
        .insertarEmpleado(nuevoEmpleado)
        .subscribe((response) => {
          console.log('Empleado insertado con éxito');

          if (response.includes('Duplicate')) {
            alert('El id ya existe');
          }
        });
    }
  }
}

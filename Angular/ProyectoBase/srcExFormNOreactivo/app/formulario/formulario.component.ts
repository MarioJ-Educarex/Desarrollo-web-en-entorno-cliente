import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Parador } from '../parador';
import { ServicioHotelesService } from '../servicio-hoteles.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  miformulario!: FormGroup;
  matcher!: ErrorStateMatcher;

  paradores: Parador[] = [];
  selected!: FormControl;
  exampleHeader!: ComponentType<any>;

  @ViewChild('fechaEn')
  fechaEn!: ElementRef;
  @ViewChild('fechaSal')
  fechaSal!: ElementRef;

  constructor(
    private servicio: ServicioHotelesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.servicio.obtenerParadores().subscribe((data) => {
      this.paradores = data;
    });

    this.miformulario = this.fb.group({
      // nombre: [''],
      paradors: ['', [Validators.required]],
      fechaEn: [''],
      fechaSal: [''],
    });
  }

  validarFecha() {
    const fechaEn = new Date(this.miformulario.get('fechaEn')?.value);
    const fechaSal = new Date(this.miformulario.get('fechaSal')?.value);
    const hoy = new Date();

    if (fechaEn === null || fechaSal === null) {
      alert('Error en las fechas');
    }
    if (fechaEn <= hoy) {
      alert('La fecha de entrada debe ser posterior a la fecha de hoy');
    }

    if (fechaSal <= fechaEn) {
      alert('La fecha de salida debe ser posterior a la fecha de entrada');
    }
  }

  EnviarDatos() {
    const fechaEn = this.miformulario.get('fechaEn')?.value;
    const fechaSal = this.miformulario.get('fechaSal')?.value;
    const hoy = new Date();

    if (
      this.miformulario.get('nombre')?.value === '' ||
      this.miformulario.get('paradors')?.value === ''
    ) {
      alert('Falta nombre o parador');
    } else if (fechaEn === '' || fechaSal === '') {
      alert('Error en las fechas');
    } else if (fechaEn <= hoy) {
      alert('La fecha de entrada debe ser posterior a la fecha de hoy');
    } else if (fechaSal <= fechaEn) {
      alert('La fecha de salida debe ser posterior a la fecha de entrada');
    }

    // this.validarFecha();
    // if (this.miformulario.valid) {
    //   console.log(this.miformulario.value);
    //   alert('OK');
    // } else {
    //   alert('Falta nombre o parador');
    // }
  }
}

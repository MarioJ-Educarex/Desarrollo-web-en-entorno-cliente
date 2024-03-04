import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Parador } from '../parador';
import { ServicioHotelesService } from '../servicio-hoteles.service';
import {
  AbstractControl,
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
      nombre: ['', [Validators.required]],
      paradors: ['', [Validators.required]],
      fechaEn: ['', [Validators.required]],
      fechaSal: ['', [Validators.required]],
    });

    // this.miformulario = this.fb.group({
    //   nombre: ['', Validators.required],
    //   paradors: ['', Validators.required],
    //   fechaEn: ['', [Validators.required, this.validarFechaHoy(this.miformulario)]],
    //   fechaSal: ['', [Validators.required, this.validarFechas(this.miformulario)]],
    // });
  }

  // fechaMatchValidator(fr: FormGroup) {
  //   const fechaEN = this.miformulario.get('fechaEn')!.value;
  //   const fechaSal = this.miformulario.get('fechaSal')!.value;

  //   if (fechaEN && fechaSal) {
  //     if (fechaSal <= fechaEN) {
  //       fr.get('fechaSal')?.setErrors({ fechaInvalida: true });
  //     } else {
  //       fr.get('fechaSal')?.setErrors(null);
  //     }
  //   }
  // }

  validarFechaHoy(fr: FormGroup) {
    const fechaEN = fr.get('fechaEn')!.value;
    const fechaSal = fr.get('fechaSal')!.value;
    const hoy = new Date();
    if (fechaEN <= hoy) {
      const fechaValidaHoy = true;
    }
  }

  validarFechas(fr: FormGroup) {
    const fechaEN = new Date(fr.get('fechaEN')!.value);
    const fechaSal = new Date(fr.get('fechaSal')!.value);

    if (fechaSal <= fechaEN) {
      const fechasValidasSal = true;
    }
  }

  EnviarDatos() {
    if (this.miformulario.valid) {
      console.log(this.miformulario.value);
      alert('OK');
    } else {
      alert('Rellene los campos correctamente');
    }
  }

  fechaEntradaPosteriorAHoy(control: AbstractControl) {
    const fechaEn = new Date(control.value);
    const hoy = new Date();
    return fechaEn > hoy ? null : { fechaInvalida: true };
  }

  fechaSalidaPosteriorAEntrada(control: AbstractControl) {
    const fechaSal = new Date(control.value);
    const fechaEn = new Date(this.miformulario.get('fechaEn')!.value);
    return fechaSal > fechaEn ? null : { fechaInvalida2: true };
  }
}

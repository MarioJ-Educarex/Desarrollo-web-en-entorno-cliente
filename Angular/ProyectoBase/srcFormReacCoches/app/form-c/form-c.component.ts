import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { Coche } from '../coche';
import { ServicioAutoService } from '../servicio-auto.service';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent implements OnInit {
  dataSource = new MatTableDataSource<Coche>();

  columnas: string[] = [
    'matricula',
    'motor',
    'climatizador',
    'cargadorElectrico',
    'gps',
    'neumaticos',
  ];
  miform!: FormGroup;

  constructor(private servicio: ServicioAutoService, private fb: FormBuilder) {
    this.miform = this.fb.group({
      matricula: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{4}[A-Z]{3}$')],
      ],
      motor: ['', [Validators.required]],
      climatizador: ['false', []],
      cargadorElectrico: ['false', []],
      gps: ['false', []],
      neumaticos: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.servicio.obtenerCoches().subscribe((coche: Coche[]) => {
      this.dataSource.data = coche;
    });
  }

  enviar() {
    if (this.miform.valid) {
      alert('Enviado');
      this.servicio.insertarCoche(this.miform.value).subscribe(() => {
        this.dataSource.data.push(this.miform.value);
        this.dataSource._updateChangeSubscription();
        this.miform.reset();
      });
    } else {
      alert('No enviado');
    }
  }
}

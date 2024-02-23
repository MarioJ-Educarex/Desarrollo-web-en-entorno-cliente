import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../alumno';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-f-notas',
  templateUrl: './f-notas.component.html',
  styleUrls: ['./f-notas.component.css'],
})
export class FNotasComponent implements OnInit {
  formulario!: FormGroup;
  dataSource = new MatTableDataSource<Alumno>();
  columnas: string[] = ['cif', 'nombre', 'n1', 'n2', 'n3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      // cif: ['', [Validators.required, Validators.pattern('^(\d{8})([A-Z]{1})$')]],
      cif: [
        '',
        [Validators.required, Validators.pattern('^([0-9]{8})([A-Z]{1})$')],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      n1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n3: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  enviarNotas() {
    if (this.formulario.valid) {
      alert('Formulario válido');
      let alumno = new Alumno();
      alumno.cif = this.formulario.value.cif;
      alumno.nombre = this.formulario.value.nombre;
      alumno.n1 = this.formulario.value.n1;
      alumno.n2 = this.formulario.value.n2;
      alumno.n3 = this.formulario.value.n3;
      this.dataSource.data.push(alumno);
      this.dataSource._updateChangeSubscription();
      this.formulario.reset();
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-f-notas',
  templateUrl: './f-notas.component.html',
  styleUrls: ['./f-notas.component.css'],
})
export class FNotasComponent {
  formulario!: FormGroup;
  dataSource = new MatTableDataSource<Alumno>();
  columnas: string[] = ['cif', 'nombre', 'n1', 'n2', 'n3'];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      cif: ['', [Validators.required, Validators.minLength(9)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      n1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n3: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  enviarNotas() {}
}

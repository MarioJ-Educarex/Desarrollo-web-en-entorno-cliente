import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Persona } from '../persona';

@Component({
  selector: 'app-cuadro-dialogo-ins',
  templateUrl: './cuadro-dialogo-ins.component.html',
  styleUrls: ['./cuadro-dialogo-ins.component.css'],
})
export class CuadroDialogoInsComponent {
  constructor(
    public dialogRef: MatDialogRef<CuadroDialogoInsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona
  ) {}
  Cancelar() {
    this.dialogRef.close();
  }
}

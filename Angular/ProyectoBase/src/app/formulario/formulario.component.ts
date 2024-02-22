import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
miformulario!: FormGroup;

constructor(private fb: FormBuilder) {

 }
ngOnInit(): void {
  this.miformulario = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    apellido: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    fechaN: ['',[Validators.required]],
    tarjetaC: ['', [Validators.required,Validators.pattern('^[0-9]{25}$')]],
    pwd: ['', [Validators.required,Validators.pattern('^[0-9]*$'),Validators.minLength(3),Validators.maxLength(3)]],
  });
}

get nombre() {
  return this.miformulario.get('nombre');
}
get apellido() {
  return this.miformulario.get('apellido');
}
get fechaN() {
  return this.miformulario.get('fechaN');
}
get tarjetaC() {
  return this.miformulario.get('tarjetaC');
}
get pwd() {
  return this.miformulario.get('pwd');
}

EnviarDatos() {
}

}

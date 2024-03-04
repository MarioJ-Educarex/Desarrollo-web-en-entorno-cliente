import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css'],
})
export class Formulario1Component implements OnInit {
  formulario1!: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    // this.formulario = new FormGroup({
    //   nombre: new FormControl(''),
    //   apellido: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });
  }
  ngOnInit(): void {
    this.formulario1 = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]'),
        ],
      ],
      firstName: [
        '',
        [Validators.required, Validators.minLength(3)],
        Validators.pattern('^[a-zA-Z]'),
        Validators.maxLength(10),
      ],
      mail: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('/(?=.*[a-zA-Z])/(?=.*d)/i'),
        ],
      ],
    });
  }

  enviarDatos() {
    console.log(this.formulario1.value);

    alert('Datos enviados');
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(
    private servicioChatService: ServicioChatService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      const usuario: Usuario = {
        nombre: this.form.value.nombre,
        email: this.form.value.email,
        pwd: this.form.value.contrasena,
        idUsuario: 0,
        activo: ''
      };

      this.servicioChatService.altaUsuario(usuario).subscribe(
        (usuario) => {
          if (usuario) {
            this.router.navigate(['/login']);
          } else {
            this.error = 'Error al registrar el usuario';
          }
        },
        (error) => {
          this.error = 'A ocurrido un error';
        }
      );
    }
  }
  @Input() error!: string | null;
  @Output() submitEM = new EventEmitter();
}

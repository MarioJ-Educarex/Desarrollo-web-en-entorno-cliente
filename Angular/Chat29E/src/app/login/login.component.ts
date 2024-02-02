import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicioChatService } from '../servicio-chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
  });

  constructor(
    private servicioChatService: ServicioChatService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      this.servicioChatService
        .seleccionarUsuario(this.form.value.usuario, this.form.value.contraseña)
        .subscribe(
          (usuario) => {
            if (usuario) {
              console.log(usuario[0].nombre)
              alert (usuario[0].nombre+" sí está registrado")
              sessionStorage.setItem('Nombre',usuario[0].nombre);

              if(sessionStorage.getItem('Nombre')=="admin"){
                this.router.navigate(['/menu']);
              } else{
                this.router.navigate(['/chat']);
              }
            } else {
              this.error = 'Usuario o contraseña incorrectos';
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

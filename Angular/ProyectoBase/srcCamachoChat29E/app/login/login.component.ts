import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  privado:boolean= false;

  constructor(private router:Router,private servicio:ServicioService){}
  usuario:Usuario=new Usuario();
  x:Usuario[]=[];
    logearse(){
      // const parametroUser="Paco"
      // this.router.navigate(["chat",parametroUser])
    }
    Logear(us: Usuario) {
      console.log("mail en el ts "+us.email)
      let obtenido:Usuario=new Usuario();
      this.servicio.logearUsuario(this.usuario).subscribe(
        (x)=>{
          if (x!==null){
            alert (x[0].nombre + " sí está registrado")
            //comprobado el usuario . OK, apertura de sesión
            sessionStorage.setItem('Nombre',x[0].nombre)
            //usuario es admin
            if (x[0].nombre=="admin"){
              //navegar hacia componente admin
              this.router.navigate(['admin'],{queryParams:{'nombre':x[0].nombre}});
            }else{
              //usuario NO admin
              if (!this.privado){
                //NO es chat privado. Navegar hacia componente chat
                this.router.navigate(['chat'],{queryParams:{'nombre':x[0].nombre}});
              }else
              {
                //SI es chat privado . Navegar hacia componente privado
                this.router.navigate(['privado'],{queryParams:{'nombre':x[0].nombre}});
              }
            }


         // this.router.navigate(['chat/:camacho'])
          }else
          {
            alert ("usuario no registrado o bloqueado")
          }
        }
      )
}
}

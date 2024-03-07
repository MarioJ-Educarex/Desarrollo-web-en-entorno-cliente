import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadoService {
  private getEmpleadosUrl =
    'http://moralo.atwebpages.com/Empleados/getEmpleados.php';
  private insertarEmpleadoUrl =
    'http://moralo.atwebpages.com/Empleados/insertarEmpleado.php';

  constructor(private http: HttpClient) {}

  getEmpleados() {
    return this.http.get<Empleado[]>(this.getEmpleadosUrl);
  }

  insertarEmpleado(empleado: Empleado) {
    return this.http.post(this.insertarEmpleadoUrl, empleado, {responseType: 'text'});
  }
}

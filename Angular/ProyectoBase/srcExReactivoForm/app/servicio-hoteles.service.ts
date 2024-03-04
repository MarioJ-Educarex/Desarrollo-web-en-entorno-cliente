import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parador } from './parador';

@Injectable({
  providedIn: 'root',
})
export class ServicioHotelesService {
  constructor(private http: HttpClient) {}

  //   Servicios: listado de paradores
  // http://moralo.atwebpages.com/paradores/obtenerParadores.php

  // insertarParador(parador: Parador) {
  //   return this.http.post(
  //     'http://moralo.atwebpages.com/paradores/insertarParador.php',
  //     parador,
  //     { responseType: 'text' }
  //   );
  // }

  obtenerParadores(): Observable<Parador[]> {
    return this.http.get<Parador[]>(
      'http://moralo.atwebpages.com/paradores/obtenerParadores.php'
    );
  }
}

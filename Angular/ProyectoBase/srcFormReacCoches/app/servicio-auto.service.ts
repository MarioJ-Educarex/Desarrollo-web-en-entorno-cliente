import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coche } from './coche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioAutoService {
  constructor(private httpCoche: HttpClient) {}

  //   Servicios:
  // http://moralo.atwebpages.com/vehiculos/insertarCoche.php
  // http://moralo.atwebpages.com/vehiculos/obtenerCoches.php

  insertarCoche(coche: Coche) {
    return this.httpCoche.post(
      'http://moralo.atwebpages.com/vehiculos/insertarCoche.php',
      coche,{responseType:"text"}
    );
  }

  obtenerCoches(): Observable<Coche[]> {
    return this.httpCoche.get<Coche[]>(
      'http://moralo.atwebpages.com/vehiculos/obtenerCoches.php'
    );
  }
}

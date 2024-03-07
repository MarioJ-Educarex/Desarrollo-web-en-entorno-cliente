import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Coche } from 'srcFormReacCoches/app/coche';

@Injectable({
  providedIn: 'root'
})
export class AutoServicioService {

  constructor(private httpCoche:HttpClient) { }

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

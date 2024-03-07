import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Parador } from './parador';

@Injectable({
  providedIn: 'root',
})
export class HotelServicioService {
  constructor(private http: HttpClient) {}

  obtenerParadores(): Observable<Parador[]> {
    return this.http.get<Parador[]>(
      'http://moralo.atwebpages.com/paradores/obtenerParadores.php'
    );
  }
}

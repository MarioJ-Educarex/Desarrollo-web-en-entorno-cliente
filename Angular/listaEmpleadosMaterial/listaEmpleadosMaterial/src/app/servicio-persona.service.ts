import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root',
})
export class ServicioPersonaService {
  insertarPersona(p: Persona) {
    return this.http.post<Persona>(
      'http://moralo.atwebpages.com/ajaxListar/create_persona.php',
      p
    );
  }

  modificarPersona(p: Persona): Observable<Persona[]> {
    // Implementa la lógica para eliminar la fruta con el ID proporcionado
    // return this.httpClient.delete<Fruta[]>(`${this.apiUrl}/${id}`);
    return this.http.put<Persona[]>(
      'http://moralo.atwebpages.com/ajaxListar/update_persona.php',
      p
    );
  }
  constructor(private http: HttpClient) {}

  eliminarPersona(id: string): Observable<Persona[]> {
    // Implementa la lógica para eliminar la fruta con el ID proporcionado
    // return this.httpClient.delete<Fruta[]>(`${this.apiUrl}/${id}`);
    return this.http.delete<Persona[]>(
      'http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' + id
    );
  }

  listarPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(
      'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php'
    );
  }
}

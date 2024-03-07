import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruta } from './fruta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioFService {
  apiUrl = 'http://moralo.atwebpages.com/menuAjax/productos2/index.php';
  constructor(private httpClient: HttpClient) {}
  leerProductos(): Observable<Fruta[]> {
    return this.httpClient.get<Fruta[]>(this.apiUrl);
  }

  crearProductos(fruta: Fruta): Observable<Fruta> {
    return this.httpClient.post<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', fruta);
  }

  actualizarProductos(fruta: Fruta): Observable<Fruta> {
    return this.httpClient.put<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', fruta);
  }

  eliminarProducto(id: string): Observable<Fruta[]> {
    // Implementa la lógica para eliminar la fruta con el ID proporcionado
    // return this.httpClient.delete<Fruta[]>(`${this.apiUrl}/${id}`);
    return this.httpClient.delete<Fruta[]>(
      'http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id=' +
        id
    );
  }

  modificarProducto(fruta: Fruta): Observable<Fruta[]> {
    // Implementa la lógica para modificar la fruta con los datos proporcionados
    // return this.httpClient.put<Fruta[]>(`${this.apiUrl}/${fruta.id}`, fruta);
    return this.httpClient.put<Fruta[]>(
      'http://moralo.atwebpages.com/menuAjax/productos2/update_product.php',
      fruta
    );
  }
}

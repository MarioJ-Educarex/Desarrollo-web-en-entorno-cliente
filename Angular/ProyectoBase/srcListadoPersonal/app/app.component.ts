import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'listadoPersonal';
  columnas: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'eliminar',
    'modificar',
  ];
  // dataSource: any;

  datos: Empleado[] = [];
  ds = new MatTableDataSource<Empleado>();
  urlString: string =
    'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<Empleado[]>(this.urlString).subscribe((res) => {
      this.ds.data = res;
      this.datos = res;
    });
  }
}

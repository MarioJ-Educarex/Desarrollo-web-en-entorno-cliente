import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioDatosService } from '../servicio-datos.service';
import { Vehiculo } from '../vehiculo';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css'],
})
export class ComponenteVehiculoComponent {
  dataSource = new MatTableDataSource<Vehiculo>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayedColumns: string[] = [
    'make_and_model',
    'color',
    'transmission',
    'doors',
    'fuel_type',
    'kilometrage',
  ];
  vehiculo!: Vehiculo[];

  constructor(private httpCliente: ServicioDatosService) {
    // this.httpCliente
    //   .listarVehiculos()
    //   .subscribe((x) => (this.dataSource.data = x));

    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;

    //llamar al método listarVehiculos del sevicio
    this.httpCliente.listarVehiculos().subscribe((x) => {
      //listacompleta que inyecta datos al atributo datasource de tabla
      this.dataSource.data = x;
      //filtro de paginación
      this.dataSource.paginator = this.paginator;
      //filtro para ordenación
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

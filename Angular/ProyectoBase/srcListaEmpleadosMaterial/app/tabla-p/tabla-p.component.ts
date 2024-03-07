import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioPersonaService } from '../servicio-persona.service';
import { Persona } from '../persona';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';

import { Component, ViewChild } from '@angular/core';
import { CuadroDialogoELimComponent } from '../cuadro-dialogo-elim/cuadro-dialogo-elim.component';
import { CuadroDialogoInsComponent } from '../cuadro-dialogo-ins/cuadro-dialogo-ins.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css'],
})
export class TablaPComponent {
  // modificar(p: Persona) {
  //   this.httpCliente
  //     .modificarPersona(p)
  //     .subscribe((result) => (this.persona = result));
  // }

  modificar(p: Persona) {
   const dialog2=this.dialog.open(CuadroDialogoInsComponent, {data:new Persona(p.id,p.nombre,p.direccion,p.cargo,p.edad,p.imagen)});
   console.log("ME modifico"+p.nombre);

   dialog2.afterClosed().subscribe((emp) => {
    if (emp != undefined)
      this.httpCliente.modificarPersona(emp).subscribe((resultado) => {
        this.gestionEmpleados();
      });
    // this.httpCliente.insertarPersona(emp).subscribe((resultado) => this.p);
    // this.httpCliente.listarPersonas();
    //  this.agregar(emp);
  });
  }
  eliminar(id: string) {
    if (confirm("¿Estás seguro que quieres eliminar a la persona con id: "+id+"?")) {
      this.httpCliente
      .eliminarPersona(id)
      .subscribe((result) =>{
        this.persona = result;
        alert("Eliminado correctamente");
        this.gestionEmpleados();
      });
    }


    // this.httpCliente
    // .leerProductos()
    // .subscribe((result) => (this.persona = result));
  }

  dataSource = new MatTableDataSource<Persona>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'eliminar',
    'modificar',
  ];

  // displayedColumns: string[] = [
  //   'id',
  //   'nombre',
  //   'direccion',
  //   'cargo',
  //   'edad',
  //   'imagen'
  // ];
  persona!: Persona[];
  p!: Persona;

  constructor(
    private httpCliente: ServicioPersonaService,
    public dialog: MatDialog
  ) {
    this.gestionEmpleados();
  }

  gestionEmpleados() {
    //llamar al método listarPersonas del sevicio
    this.httpCliente.listarPersonas().subscribe((x) => {
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

  abrirDialogo() {
    const dialogo1 = this.dialog.open(CuadroDialogoInsComponent, {
      data: new Persona(0, '', '', '', 0, ''),
    });

    dialogo1.afterClosed().subscribe((emp) => {
      if (emp != undefined)
        this.httpCliente.insertarPersona(emp).subscribe((resultado) => {
          this.gestionEmpleados();
        });
      // this.httpCliente.insertarPersona(emp).subscribe((resultado) => this.p);
      // this.httpCliente.listarPersonas();
      //  this.agregar(emp);
    });
  }
  //   agregar(emp: Empleado) {
  //        this.datos.push(new Empleado(emp.id, emp.nombre, emp.direccion,
  //                                              emp.cargo,   emp.edad,    emp.imagen));
  //        this.tabla1.renderRows();
  // }
}

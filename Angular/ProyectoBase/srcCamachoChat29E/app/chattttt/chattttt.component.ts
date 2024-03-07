import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Usuario } from '../usuario';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-chattttt',
  templateUrl: './chattttt.component.html',
  styleUrls: ['./chattttt.component.css']
})
export class ChatttttComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

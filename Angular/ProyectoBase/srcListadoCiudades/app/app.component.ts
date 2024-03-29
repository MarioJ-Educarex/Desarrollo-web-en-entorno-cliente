import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoCiudades';
  pueblitodos:any;
  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.http.get('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php').subscribe(
    resultado => {
    this.pueblitodos = resultado;
    });
  }
}

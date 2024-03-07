import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  cambiarColor1(b1: HTMLButtonElement, b2:HTMLButtonElement, b3:HTMLButtonElement, b4:HTMLButtonElement){
    b1.style.backgroundColor="blue";
    b2.style.backgroundColor="blue";
    b3.style.backgroundColor="blue";
    b4.style.backgroundColor="blue";

  }

  cambiarColor2(b1: HTMLButtonElement, b2:HTMLButtonElement, b3:HTMLButtonElement, b4:HTMLButtonElement){
    b1.style.backgroundColor="green";
    b2.style.backgroundColor="green";
    b3.style.backgroundColor="green";
    b4.style.backgroundColor="green";

  }

  cambiarColor3(b1: HTMLButtonElement, b2:HTMLButtonElement, b3:HTMLButtonElement, b4:HTMLButtonElement){
    b1.style.backgroundColor="black";
    b2.style.backgroundColor="black";
    b3.style.backgroundColor="black";
    b4.style.backgroundColor="black";

  }

  cambiarColor4(b1: HTMLButtonElement, b2:HTMLButtonElement, b3:HTMLButtonElement, b4:HTMLButtonElement){
    b1.style.backgroundColor="red";
    b2.style.backgroundColor="red";
    b3.style.backgroundColor="red";
    b4.style.backgroundColor="red";

  }

}

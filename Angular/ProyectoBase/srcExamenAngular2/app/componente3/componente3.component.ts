import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  imageUrl: string | undefined;
  randomImageNumber:Number | undefined;

  constructor() {
    this.generateRandomImage();
  }

  generateRandomImage() {
    console.log("lsdkjvlksngvkl");
    this.randomImageNumber = Math.floor(Math.random() * 20);
    this.imageUrl = "https://randomuser.me/api/portraits/men/"+this.randomImageNumber + ".jpg"


  }
}

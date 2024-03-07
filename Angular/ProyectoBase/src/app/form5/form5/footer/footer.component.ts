import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() infocabecera: string = '';

  @Output() clasePrincipal = new EventEmitter();
  claseNueva: string = '';

  enviarClase() {
    this.clasePrincipal.emit({ordenHijo: this.claseNueva});
  }
}

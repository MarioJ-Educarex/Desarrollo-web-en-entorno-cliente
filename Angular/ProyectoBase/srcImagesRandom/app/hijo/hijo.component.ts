import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();

  generar() {
    this.devolverNum1.emit({ Num1Aleat: Math.floor(Math.random() * 100) });
    this.devolverNum2.emit({ Num2Aleat: Math.floor(Math.random() * 100) });
  }
}

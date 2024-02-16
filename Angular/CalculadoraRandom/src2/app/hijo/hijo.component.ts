import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  ngOnInit(): void {
    // this.devolverNum1.emit({ Num1Aleat: Math.round(Math.random() * 100) });
    // this.devolverNum2.emit({ Num2Aleat: Math.round(Math.random() * 100) });
  }
  // @Input() Aleatorio1!: number;
  // @Input() Aleatorio2!: number;
  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();


  generar() {
    this.devolverNum1.emit({ Num1Aleat: Math.round(Math.random() * 100) });
    this.devolverNum2.emit({ Num2Aleat: Math.round(Math.random() * 100) });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoELimComponent } from './cuadro-dialogo-elim.component';

describe('CuadroDialogoELimComponent', () => {
  let component: CuadroDialogoELimComponent;
  let fixture: ComponentFixture<CuadroDialogoELimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoELimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoELimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

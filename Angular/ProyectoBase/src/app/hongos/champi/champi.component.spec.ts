import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampiComponent } from './champi.component';

describe('ChampiComponent', () => {
  let component: ChampiComponent;
  let fixture: ComponentFixture<ChampiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

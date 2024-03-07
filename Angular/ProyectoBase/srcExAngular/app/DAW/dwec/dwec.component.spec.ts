import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWECComponent } from './dwec.component';

describe('DWECComponent', () => {
  let component: DWECComponent;
  let fixture: ComponentFixture<DWECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWECComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

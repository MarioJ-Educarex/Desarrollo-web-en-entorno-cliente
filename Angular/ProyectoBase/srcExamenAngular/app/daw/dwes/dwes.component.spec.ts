import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWESComponent } from './dwes.component';

describe('DWESComponent', () => {
  let component: DWESComponent;
  let fixture: ComponentFixture<DWESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DWESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DWESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

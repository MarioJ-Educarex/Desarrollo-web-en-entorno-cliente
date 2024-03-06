import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletusComponent } from './boletus.component';

describe('BoletusComponent', () => {
  let component: BoletusComponent;
  let fixture: ComponentFixture<BoletusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

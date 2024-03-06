import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatatasComponent } from './patatas.component';

describe('PatatasComponent', () => {
  let component: PatatasComponent;
  let fixture: ComponentFixture<PatatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HortalizasComponent } from './hortalizas.component';

describe('HortalizasComponent', () => {
  let component: HortalizasComponent;
  let fixture: ComponentFixture<HortalizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HortalizasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HortalizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

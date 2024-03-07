import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMMSComponent } from './pmms.component';

describe('PMMSComponent', () => {
  let component: PMMSComponent;
  let fixture: ComponentFixture<PMMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

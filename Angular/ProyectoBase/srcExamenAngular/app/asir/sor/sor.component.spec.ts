import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SORComponent } from './sor.component';

describe('SORComponent', () => {
  let component: SORComponent;
  let fixture: ComponentFixture<SORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SORComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

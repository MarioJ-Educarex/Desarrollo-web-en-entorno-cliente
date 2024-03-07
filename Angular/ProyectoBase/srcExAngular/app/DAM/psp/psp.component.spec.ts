import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSPComponent } from './psp.component';

describe('PSPComponent', () => {
  let component: PSPComponent;
  let fixture: ComponentFixture<PSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

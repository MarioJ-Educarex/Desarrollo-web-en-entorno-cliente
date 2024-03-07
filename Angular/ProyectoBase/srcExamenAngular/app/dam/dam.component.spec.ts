import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAMComponent } from './dam.component';

describe('DAMComponent', () => {
  let component: DAMComponent;
  let fixture: ComponentFixture<DAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

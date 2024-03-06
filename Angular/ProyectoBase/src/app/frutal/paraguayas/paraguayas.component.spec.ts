import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaguayasComponent } from './paraguayas.component';

describe('ParaguayasComponent', () => {
  let component: ParaguayasComponent;
  let fixture: ComponentFixture<ParaguayasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaguayasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaguayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

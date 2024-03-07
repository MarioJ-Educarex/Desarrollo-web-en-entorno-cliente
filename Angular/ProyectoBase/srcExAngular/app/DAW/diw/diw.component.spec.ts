import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIWComponent } from './diw.component';

describe('DIWComponent', () => {
  let component: DIWComponent;
  let fixture: ComponentFixture<DIWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

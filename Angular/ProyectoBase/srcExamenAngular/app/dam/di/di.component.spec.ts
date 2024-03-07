import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIComponent } from './di.component';

describe('DIComponent', () => {
  let component: DIComponent;
  let fixture: ComponentFixture<DIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

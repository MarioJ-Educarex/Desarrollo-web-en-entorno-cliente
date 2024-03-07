import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FHComponent } from './fh.component';

describe('FHComponent', () => {
  let component: FHComponent;
  let fixture: ComponentFixture<FHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarinaComponent } from './nectarina.component';

describe('NectarinaComponent', () => {
  let component: NectarinaComponent;
  let fixture: ComponentFixture<NectarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NectarinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NectarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

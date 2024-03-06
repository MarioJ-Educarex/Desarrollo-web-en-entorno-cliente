import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HongosComponent } from './hongos.component';

describe('HongosComponent', () => {
  let component: HongosComponent;
  let fixture: ComponentFixture<HongosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HongosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HongosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

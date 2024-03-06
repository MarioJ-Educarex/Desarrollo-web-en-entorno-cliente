import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AromaticasComponent } from './aromaticas.component';

describe('AromaticasComponent', () => {
  let component: AromaticasComponent;
  let fixture: ComponentFixture<AromaticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AromaticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AromaticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

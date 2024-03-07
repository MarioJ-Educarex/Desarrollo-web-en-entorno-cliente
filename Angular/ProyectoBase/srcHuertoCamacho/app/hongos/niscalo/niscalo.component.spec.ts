import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiscaloComponent } from './niscalo.component';

describe('NiscaloComponent', () => {
  let component: NiscaloComponent;
  let fixture: ComponentFixture<NiscaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiscaloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiscaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

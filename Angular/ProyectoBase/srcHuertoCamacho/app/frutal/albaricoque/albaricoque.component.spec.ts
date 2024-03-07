import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaricoqueComponent } from './albaricoque.component';

describe('AlbaricoqueComponent', () => {
  let component: AlbaricoqueComponent;
  let fixture: ComponentFixture<AlbaricoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbaricoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbaricoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

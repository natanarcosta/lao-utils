import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranquilComponent } from './tranquil.component';

describe('TranquilComponent', () => {
  let component: TranquilComponent;
  let fixture: ComponentFixture<TranquilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranquilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranquilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

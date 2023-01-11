import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgPROComponent } from './arg-pro.component';

describe('ArgPROComponent', () => {
  let component: ArgPROComponent;
  let fixture: ComponentFixture<ArgPROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgPROComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgPROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

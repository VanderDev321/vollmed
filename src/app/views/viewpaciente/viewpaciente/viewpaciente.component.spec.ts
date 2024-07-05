import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpacienteComponent } from './viewpaciente.component';

describe('ViewpacienteComponent', () => {
  let component: ViewpacienteComponent;
  let fixture: ComponentFixture<ViewpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

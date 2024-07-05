import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdicionarComponent } from './formulario-adicionar.component';

describe('FormularioAdicionarComponent', () => {
  let component: FormularioAdicionarComponent;
  let fixture: ComponentFixture<FormularioAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

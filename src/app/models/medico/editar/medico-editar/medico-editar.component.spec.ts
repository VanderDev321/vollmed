import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEditarComponent } from './medico-editar.component';

describe('MedicoEditarComponent', () => {
  let component: MedicoEditarComponent;
  let fixture: ComponentFixture<MedicoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

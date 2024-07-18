import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcionarComponent } from './adcionar.component';

describe('AdcionarComponent', () => {
  let component: AdcionarComponent;
  let fixture: ComponentFixture<AdcionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdcionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdcionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

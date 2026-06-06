import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCamposBasico } from './forms-campos-basico';

describe('FormsCamposBasico', () => {
  let component: FormsCamposBasico;
  let fixture: ComponentFixture<FormsCamposBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCamposBasico],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsCamposBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

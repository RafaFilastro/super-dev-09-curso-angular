import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio03ConversorTemperatura } from './exercicio03-conversor-temperatura';

describe('Exercicio03ConversorTemperatura', () => {
  let component: Exercicio03ConversorTemperatura;
  let fixture: ComponentFixture<Exercicio03ConversorTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio03ConversorTemperatura],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio03ConversorTemperatura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

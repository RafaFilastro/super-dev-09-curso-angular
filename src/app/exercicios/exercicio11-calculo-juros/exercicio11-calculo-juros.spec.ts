import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio11CalculoJuros } from './exercicio11-calculo-juros';

describe('Exercicio11CalculoJuros', () => {
  let component: Exercicio11CalculoJuros;
  let fixture: ComponentFixture<Exercicio11CalculoJuros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio11CalculoJuros],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio11CalculoJuros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

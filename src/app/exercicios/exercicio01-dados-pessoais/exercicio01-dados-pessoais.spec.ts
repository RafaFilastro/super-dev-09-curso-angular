import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio01DadosPessoais } from './exercicio01-dados-pessoais';

describe('Exercicio01DadosPessoais', () => {
  let component: Exercicio01DadosPessoais;
  let fixture: ComponentFixture<Exercicio01DadosPessoais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio01DadosPessoais],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio01DadosPessoais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

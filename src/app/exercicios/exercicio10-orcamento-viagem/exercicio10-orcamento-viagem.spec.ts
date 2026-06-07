import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio10OrcamentoViagem } from './exercicio10-orcamento-viagem';

describe('Exercicio10OrcamentoViagem', () => {
  let component: Exercicio10OrcamentoViagem;
  let fixture: ComponentFixture<Exercicio10OrcamentoViagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio10OrcamentoViagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio10OrcamentoViagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

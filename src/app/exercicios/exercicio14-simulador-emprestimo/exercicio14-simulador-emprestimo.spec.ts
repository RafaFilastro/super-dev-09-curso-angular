import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio14SimuladorEmprestimo } from './exercicio14-simulador-emprestimo';

describe('Exercicio14SimuladorEmprestimo', () => {
  let component: Exercicio14SimuladorEmprestimo;
  let fixture: ComponentFixture<Exercicio14SimuladorEmprestimo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio14SimuladorEmprestimo],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio14SimuladorEmprestimo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio04CadastroProduto } from './exercicio04-cadastro-produto';

describe('Exercicio04CadastroProduto', () => {
  let component: Exercicio04CadastroProduto;
  let fixture: ComponentFixture<Exercicio04CadastroProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio04CadastroProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio04CadastroProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

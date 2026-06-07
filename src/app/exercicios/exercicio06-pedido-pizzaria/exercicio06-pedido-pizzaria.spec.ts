import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio06PedidoPizzaria } from './exercicio06-pedido-pizzaria';

describe('Exercicio06PedidoPizzaria', () => {
  let component: Exercicio06PedidoPizzaria;
  let fixture: ComponentFixture<Exercicio06PedidoPizzaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio06PedidoPizzaria],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio06PedidoPizzaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio12SistemaReserva } from './exercicio12-sistema-reserva';

describe('Exercicio12SistemaReserva', () => {
  let component: Exercicio12SistemaReserva;
  let fixture: ComponentFixture<Exercicio12SistemaReserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio12SistemaReserva],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio12SistemaReserva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

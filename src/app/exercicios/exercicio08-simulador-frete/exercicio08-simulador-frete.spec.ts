import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio08SimuladorFrete } from './exercicio08-simulador-frete';

describe('Exercicio08SimuladorFrete', () => {
  let component: Exercicio08SimuladorFrete;
  let fixture: ComponentFixture<Exercicio08SimuladorFrete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio08SimuladorFrete],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio08SimuladorFrete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

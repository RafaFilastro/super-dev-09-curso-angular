import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio13CalculoEnergia } from './exercicio13-calculo-energia';

describe('Exercicio13CalculoEnergia', () => {
  let component: Exercicio13CalculoEnergia;
  let fixture: ComponentFixture<Exercicio13CalculoEnergia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio13CalculoEnergia],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio13CalculoEnergia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

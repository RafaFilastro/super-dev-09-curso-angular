import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio05Imc } from './exercicio05-imc';

describe('Exercicio05Imc', () => {
  let component: Exercicio05Imc;
  let fixture: ComponentFixture<Exercicio05Imc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio05Imc],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio05Imc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

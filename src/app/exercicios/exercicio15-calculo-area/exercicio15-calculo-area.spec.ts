import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio15CalculoArea } from './exercicio15-calculo-area';

describe('Exercicio15CalculoArea', () => {
  let component: Exercicio15CalculoArea;
  let fixture: ComponentFixture<Exercicio15CalculoArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio15CalculoArea],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio15CalculoArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

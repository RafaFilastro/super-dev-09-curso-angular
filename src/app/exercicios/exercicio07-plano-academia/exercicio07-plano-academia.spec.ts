import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio07PlanoAcademia } from './exercicio07-plano-academia';

describe('Exercicio07PlanoAcademia', () => {
  let component: Exercicio07PlanoAcademia;
  let fixture: ComponentFixture<Exercicio07PlanoAcademia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio07PlanoAcademia],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio07PlanoAcademia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

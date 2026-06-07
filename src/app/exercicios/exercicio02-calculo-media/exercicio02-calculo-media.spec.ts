import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio02CalculoMedia } from './exercicio02-calculo-media';

describe('Exercicio02CalculoMedia', () => {
  let component: Exercicio02CalculoMedia;
  let fixture: ComponentFixture<Exercicio02CalculoMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio02CalculoMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio02CalculoMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

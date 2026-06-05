import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindas } from './boas-vindas';

describe('BoasVindas', () => {
  let component: BoasVindas;
  let fixture: ComponentFixture<BoasVindas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoasVindas],
    }).compileComponents();

    fixture = TestBed.createComponent(BoasVindas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

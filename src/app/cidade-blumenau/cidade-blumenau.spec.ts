import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeBlumenau } from './cidade-blumenau';

describe('CidadeBlumenau', () => {
  let component: CidadeBlumenau;
  let fixture: ComponentFixture<CidadeBlumenau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CidadeBlumenau],
    }).compileComponents();

    fixture = TestBed.createComponent(CidadeBlumenau);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

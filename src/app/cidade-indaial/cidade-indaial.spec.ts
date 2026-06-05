import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeIndaial } from './cidade-indaial';

describe('CidadeIndaial', () => {
  let component: CidadeIndaial;
  let fixture: ComponentFixture<CidadeIndaial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CidadeIndaial],
    }).compileComponents();

    fixture = TestBed.createComponent(CidadeIndaial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

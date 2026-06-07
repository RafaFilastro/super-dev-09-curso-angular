import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio09CadastroUsuario } from './exercicio09-cadastro-usuario';

describe('Exercicio09CadastroUsuario', () => {
  let component: Exercicio09CadastroUsuario;
  let fixture: ComponentFixture<Exercicio09CadastroUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio09CadastroUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio09CadastroUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

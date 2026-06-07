import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio09-cadastro-usuario',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio09-cadastro-usuario.html',
  styleUrl: './exercicio09-cadastro-usuario.scss',
})
export class Exercicio09CadastroUsuario {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  mensagem: string = '';

  cadastrar(): void {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.mensagem = 'A senha e a confirmação não são iguais.';
      return;
    }

    this.mensagem = `Cadastro realizado com sucesso para ${this.nome}.`;
  }
}

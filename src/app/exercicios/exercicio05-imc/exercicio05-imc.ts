import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio05-imc',
  imports: [FormsModule],
  templateUrl: './exercicio05-imc.html',
  styleUrl: './exercicio05-imc.scss',
})
export class Exercicio05Imc {
  nome: string = '';
  peso: number | null = null;
  altura: number | null = null;
  resultadoIMC: number | null = null;
  classificacaoIMC: string = '';

  calcularIMC(): void {
    if (!this.nome || this.peso === null || this.altura === null) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (this.altura <= 0) {
      alert('A altura precisa ser maior que zero.');
      return;
    }

    this.resultadoIMC = this.peso / (this.altura * this.altura);

    this.classificarIMC();

    alert(
      `Nome: ${this.nome}
IMC: ${this.resultadoIMC.toFixed(2)}
Classificação: ${this.classificacaoIMC}`,
    );

    this.limparCampos();
  }

  classificarIMC(): void {
    if (this.resultadoIMC === null) {
      return;
    }

    if (this.resultadoIMC < 18.5) {
      this.classificacaoIMC = 'Abaixo do peso';
    } else if (this.resultadoIMC < 25) {
      this.classificacaoIMC = 'Peso normal';
    } else if (this.resultadoIMC < 30) {
      this.classificacaoIMC = 'Sobrepeso';
    } else {
      this.classificacaoIMC = 'Obesidade';
    }
  }

  limparCampos(): void {
    this.nome = '';
    this.peso = null;
    this.altura = null;
    this.resultadoIMC = null;
    this.classificacaoIMC = '';
  }
}

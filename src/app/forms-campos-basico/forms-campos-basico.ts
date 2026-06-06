import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-campos-basico',
  imports: [FormsModule],
  templateUrl: './forms-campos-basico.html',
  styleUrl: './forms-campos-basico.scss',
})
export class FormsCamposBasico {
  // Signal vamos utilizar para relacionar um campo por exemplo com a variável
  nome = signal<string>("");
  sobrenome = signal<string>("");
  resultadoNomeCompleto: string = "";

  numero01 = signal<number | null>(null);
  numero02 = signal<number | null>(null);
  operacao = signal<string>("");

  // void sem retorno
  apresentarNomeCompleto(): void {
    // let nomeCompleto = this.nome() + " " + this.sobrenome();
    const nomeCompleto: string = `${this.nome()} ${this.sobrenome()}`;

    this.resultadoNomeCompleto = nomeCompleto;
    //alert(`Nome completo: ${nomeCompleto}`);
  }

  realizarCalculo(): void {
    if (this.numero01() === null) {
      alert("Preencher o campo número 1");
      return;
    }

    if (this.numero02() === null) {
      alert("Preencher o campo número 2");
      return;
    }

    if (this.operacao() === "somar") {
      const soma: number = this.numero01()! + this.numero02()!;
      alert(`Soma: ${soma}`);
    } else if (this.operacao() === "subtrair") {
      const subtracao: number = this.numero01()! - this.numero02()!;
      alert(`Subtração: ${subtracao}`);
    } else if (this.operacao() === "multiplicar") {
      const multiplicacao: number = this.numero01()! * this.numero02()!;
      alert(`Multiplicação: ${multiplicacao}`);
    } else if (this.operacao() === "dividir") {
      const divisao: number = this.numero01()! / this.numero02()!;
      alert(`Divisão: ${divisao}`);
    } else {
      alert("Escolha a operação");
    }
  }
}

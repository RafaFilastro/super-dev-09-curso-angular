import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio14-simulador-emprestimo',
  imports: [FormsModule, NgIf, CurrencyPipe],
  templateUrl: './exercicio14-simulador-emprestimo.html',
  styleUrl: './exercicio14-simulador-emprestimo.scss',
})
export class Exercicio14SimuladorEmprestimo {
  valor: number | null = null;
  taxa: number | null = null;
  parcelas: number | null = null;

  resultado: {
    parcela: number;
    totalPago: number;
    juros: number;
  } | null = null;

  calcularEmprestimo(): void {
    if (
      this.valor === null ||
      this.taxa === null ||
      this.parcelas === null
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    if (
      this.valor <= 0 ||
      this.taxa <= 0 ||
      this.parcelas <= 0
    ) {
      alert('Os valores devem ser maiores que zero.');
      return;
    }

    const taxaMensal = (this.taxa / 100) / 12;

    const parcela =
      (this.valor * taxaMensal) /
      (1 - Math.pow(1 + taxaMensal, -this.parcelas));

    const totalPago = parcela * this.parcelas;

    const juros = totalPago - this.valor;

    this.resultado = {
      parcela,
      totalPago,
      juros,
    };
  }
}

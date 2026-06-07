import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio11-calculo-juros',
  imports: [FormsModule, NgIf, DecimalPipe],
  templateUrl: './exercicio11-calculo-juros.html',
  styleUrl: './exercicio11-calculo-juros.scss',
})
export class Exercicio11CalculoJuros {
  capital: number | null = null;
  taxa: number | null = null;
  periodo: number | null = null;
  resultado: number | null = null;

  calcularJuros(): void {
    if (
      this.capital === null ||
      this.taxa === null ||
      this.periodo === null
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.capital <= 0 || this.taxa <= 0 || this.periodo <= 0) {
      alert('Os valores precisam ser maiores que zero.');
      return;
    }

    const taxaDecimal = this.taxa / 100;

    this.resultado = this.capital * Math.pow(1 + taxaDecimal, this.periodo);
  }
}

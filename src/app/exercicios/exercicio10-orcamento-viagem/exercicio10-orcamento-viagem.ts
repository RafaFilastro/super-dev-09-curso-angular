import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio10-orcamento-viagem',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio10-orcamento-viagem.html',
  styleUrl: './exercicio10-orcamento-viagem.scss',
})
export class Exercicio10OrcamentoViagem {
  nomeViajante: string = '';
  destino: string = '';
  quantidadeDias: number | null = null;
  hospedagem: string = '';
  cafeManha: boolean = false;
  passeioTuristico: boolean = false;
  resumoFinal: string = '';

  calcularOrcamento(): void {
    if (!this.nomeViajante || !this.destino || this.quantidadeDias === null || this.quantidadeDias <= 0) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    if (!this.hospedagem) {
      alert('Escolha uma hospedagem.');
      return;
    }

    let valorDestino = 0;
    let valorDiaria = 0;

    if (this.destino === 'florianopolis') {
      valorDestino = 300;
    } else if (this.destino === 'gramado') {
      valorDestino = 500;
    } else if (this.destino === 'rio-de-janeiro') {
      valorDestino = 700;
    } else if (this.destino === 'sao-paulo') {
      valorDestino = 600;
    }

    if (this.hospedagem === 'simples') {
      valorDiaria = 120;
    } else if (this.hospedagem === 'conforto') {
      valorDiaria = 220;
    } else if (this.hospedagem === 'luxo') {
      valorDiaria = 350;
    }

    let total = valorDestino + valorDiaria * this.quantidadeDias;

    if (this.cafeManha) {
      total += 30 * this.quantidadeDias;
    }

    if (this.passeioTuristico) {
      total += 150;
    }

    this.resumoFinal = `Viajante: ${this.nomeViajante}
Destino: ${this.destino}
Quantidade de dias: ${this.quantidadeDias}
Hospedagem: ${this.hospedagem}
Café da manhã: ${this.cafeManha ? 'Sim' : 'Não'}
Passeio turístico: ${this.passeioTuristico ? 'Sim' : 'Não'}
Total do orçamento: R$ ${total.toFixed(2)}`;
  }
}

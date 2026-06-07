import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio08-simulador-frete',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio08-simulador-frete.html',
  styleUrl: './exercicio08-simulador-frete.scss',
})
export class Exercicio08SimuladorFrete {
  nomeProduto: string = '';
  valorProduto: number | null = null;
  regiao: string = '';
  entregaExpressa: boolean = false;
  resultado: string = '';

  calcularTotal(): void {
    if (!this.nomeProduto || this.valorProduto === null || this.valorProduto <= 0 || !this.regiao) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    let valorFrete = 0;

    if (this.regiao === 'sul') {
      valorFrete = 20;
    } else if (this.regiao === 'sudeste') {
      valorFrete = 25;
    } else if (this.regiao === 'centro-oeste') {
      valorFrete = 35;
    } else if (this.regiao === 'nordeste') {
      valorFrete = 45;
    } else if (this.regiao === 'norte') {
      valorFrete = 55;
    }

    if (this.entregaExpressa) {
      valorFrete += 15;
    }

    const total = this.valorProduto + valorFrete;

    this.resultado = `Produto: ${this.nomeProduto} | Valor do produto: R$ ${this.valorProduto.toFixed(2)} | Frete: R$ ${valorFrete.toFixed(2)} | Total: R$ ${total.toFixed(2)}`;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio06-pedido-pizzaria',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio06-pedido-pizzaria.html',
  styleUrl: './exercicio06-pedido-pizzaria.scss',
})
export class Exercicio06PedidoPizzaria {
  nomeCliente: string = '';
  tamanhoPizza: string = '';
  quantidade: number | null = null;
  bordaRecheada: boolean = false;
  resumoPedido: string = '';

  calcularPedido(): void {
    if (!this.nomeCliente || !this.tamanhoPizza || this.quantidade === null || this.quantidade <= 0) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    let valorPizza = 0;

    if (this.tamanhoPizza === 'pequena') {
      valorPizza = 30;
    } else if (this.tamanhoPizza === 'media') {
      valorPizza = 45;
    } else if (this.tamanhoPizza === 'grande') {
      valorPizza = 60;
    }

    if (this.bordaRecheada) {
      valorPizza += 8;
    }

    const total = valorPizza * this.quantidade;

    this.resumoPedido = `Cliente: ${this.nomeCliente} | Tamanho: ${this.tamanhoPizza} | Quantidade: ${this.quantidade} | Total: R$ ${total.toFixed(2)}`;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio04-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './exercicio04-cadastro-produto.html',
  styleUrl: './exercicio04-cadastro-produto.scss',
})
export class Exercicio04CadastroProduto {
  nomeProduto: string = '';
  precoProduto: number | null = null;
  quantidadeProduto: number | null = null;
  total: number | null = null;

  calcularTotal(): void {
    if (this.nomeProduto && this.precoProduto !== null && this.quantidadeProduto !== null) {
      this.total = this.precoProduto * this.quantidadeProduto;

      alert(
        `Produto: ${this.nomeProduto}
         Preço: R$ ${this.precoProduto.toFixed(2)}
         Quantidade: ${this.quantidadeProduto}
         Total: R$ ${this.total.toFixed(2)}`,
        );
        this.nomeProduto = '';
        this.precoProduto = null;
        this.quantidadeProduto = null;
        this.total = null;
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    }
}

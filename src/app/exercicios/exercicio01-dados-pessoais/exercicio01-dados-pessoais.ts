import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio01-dados-pessoais',
  imports: [FormsModule],
  templateUrl: './exercicio01-dados-pessoais.html',
  styleUrl: './exercicio01-dados-pessoais.scss',
})
export class Exercicio01DadosPessoais {
    nome: string = "";
    sobrenome: string = "";
    idade: number | null = null
    resultado: string = "";

    apresentarDados(): void {
        if (this.nome === "") {
            alert("Preencher o campo nome");
            return;
        }
        if (this.sobrenome === "") {
            alert("Preencher o campo sobrenome");
            return;
        }
        if (this.idade === null) {
            alert("Preencher o campo idade");
            return;
        }

        alert(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    }
}


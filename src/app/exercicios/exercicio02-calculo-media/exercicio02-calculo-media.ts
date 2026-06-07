import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio02-calculo-media',
  imports: [FormsModule],
  templateUrl: './exercicio02-calculo-media.html',
  styleUrl: './exercicio02-calculo-media.scss',
})
export class Exercicio02CalculoMedia {
    nota1: number = null!;
    nota2: number = null!;
    nota3: number = null!;
    media: number = 0;

    calcularMedia(): void {
        if (this.nota1 === null || this.nota2 === null || this.nota3 === null) {
            alert("Preencher todas as notas");
            return;
        }

        this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
        if (this.media >= 7) {
            alert(`Média: ${this.media.toFixed(2)} - Aprovado`);
        } else {
            alert(`Média: ${this.media.toFixed(2)} - Reprovado`);
        }
    }

}

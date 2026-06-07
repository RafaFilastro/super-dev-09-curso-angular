import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio13-calculo-energia',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio13-calculo-energia.html',
  styleUrl: './exercicio13-calculo-energia.scss',
})
export class Exercicio13CalculoEnergia {
  potencia: number | null = null;
  tempo: number | null = null;
  energiaCalculada: number | null = null;

  calcularEnergia(): void {
    if (this.potencia === null || this.tempo === null) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.potencia <= 0 || this.tempo <= 0) {
      alert('Os valores devem ser maiores que zero.');
      return;
    }

    // Fórmula:
    // kWh = (Potência em Watts × Tempo em horas) / 1000

    this.energiaCalculada =
      (this.potencia * this.tempo) / 1000;
  }
}

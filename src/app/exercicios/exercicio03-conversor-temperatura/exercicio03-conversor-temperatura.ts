import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio03-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './exercicio03-conversor-temperatura.html',
  styleUrl: './exercicio03-conversor-temperatura.scss',
})
export class Exercicio03ConversorTemperatura {
  temperatura: number | null = null;
  opcaoConversao: string = '';

  converter() {
    if (this.temperatura === null) {
      alert('Digite uma temperatura.');
      return;
    }
    if (!this.opcaoConversao) {
      alert('Selecione uma opção de conversão.');
      return;
    }

    let resultado: number;

    if (this.opcaoConversao === 'celsius-fahrenheit') {
      resultado = (this.temperatura * 9) / 5 + 32;
      alert(
        `${this.temperatura}°C equivale a ${resultado.toFixed(2)}°F`
      );
    } else {
      resultado = ((this.temperatura - 32) * 5) / 9;
      alert(
        `${this.temperatura}°F equivale a ${resultado.toFixed(2)}°C`
      );
    }
  }
}

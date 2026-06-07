import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

interface Reserva {
  nome: string;
  checkin: string;
  checkout: string;
  hospedes: number;
}

@Component({
  selector: 'app-exercicio12-sistema-reserva',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './exercicio12-sistema-reserva.html',
  styleUrl: './exercicio12-sistema-reserva.scss',
})
export class Exercicio12SistemaReserva {
  nome: string = '';
  checkin: string = '';
  checkout: string = '';
  hospedes: number | null = null;

  reservas: Reserva[] = [];

  fazerReserva(): void {
    if (!this.nome || !this.checkin || !this.checkout || this.hospedes === null) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.hospedes <= 0) {
      alert('O número de hóspedes precisa ser maior que zero.');
      return;
    }

    const novaReserva: Reserva = {
      nome: this.nome,
      checkin: this.checkin,
      checkout: this.checkout,
      hospedes: this.hospedes,
    };

    this.reservas.push(novaReserva);

    alert('Reserva realizada com sucesso!');

    this.limparCampos();
  }

  cancelarReserva(indice: number): void {
    this.reservas.splice(indice, 1);
    alert('Reserva cancelada com sucesso!');
  }

  limparCampos(): void {
    this.nome = '';
    this.checkin = '';
    this.checkout = '';
    this.hospedes = null;
  }
}

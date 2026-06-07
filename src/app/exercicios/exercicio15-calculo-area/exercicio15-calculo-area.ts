import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio15-calculo-area',
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio15-calculo-area.html',
  styleUrl: './exercicio15-calculo-area.scss',
})
export class Exercicio15CalculoArea {
  forma: string = '';

  lado: number | null = null;

  base: number | null = null;
  altura: number | null = null;

  baseTriangulo: number | null = null;
  alturaTriangulo: number | null = null;

  raio: number | null = null;

  area: number | null = null;

  calcularArea(): void {
    if (!this.forma) {
      alert('Escolha uma forma geométrica.');
      return;
    }

    if (this.forma === 'quadrado') {
      if (this.lado === null || this.lado <= 0) {
        alert('Informe um lado válido.');
        return;
      }

      this.area = this.lado * this.lado;
    }

    if (this.forma === 'retangulo') {
      if (
        this.base === null ||
        this.altura === null ||
        this.base <= 0 ||
        this.altura <= 0
      ) {
        alert('Informe base e altura válidas.');
        return;
      }

      this.area = this.base * this.altura;
    }

    if (this.forma === 'triangulo') {
      if (
        this.baseTriangulo === null ||
        this.alturaTriangulo === null ||
        this.baseTriangulo <= 0 ||
        this.alturaTriangulo <= 0
      ) {
        alert('Informe base e altura válidas.');
        return;
      }

      this.area = (this.baseTriangulo * this.alturaTriangulo) / 2;
    }

    if (this.forma === 'circulo') {
      if (this.raio === null || this.raio <= 0) {
        alert('Informe um raio válido.');
        return;
      }

      this.area = Math.PI * this.raio * this.raio;
    }
  }
}

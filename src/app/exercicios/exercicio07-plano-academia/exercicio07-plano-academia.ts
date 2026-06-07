import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio07-plano-academia',
  imports: [FormsModule],
  templateUrl: './exercicio07-plano-academia.html',
  styleUrl: './exercicio07-plano-academia.scss',
})
export class Exercicio07PlanoAcademia {
  nomeAluno: string = '';
  plano: string = '';
  periodo: string = '';
  personal: boolean = false;

  calcularPlano(): void {
    if (!this.nomeAluno) {
      alert('Preencha o nome do aluno.');
      return;
    }

    if (!this.plano) {
      alert('Escolha um plano.');
      return;
    }

    if (!this.periodo) {
      alert('Escolha o período do contrato.');
      return;
    }

    let valorBase = 0;

    if (this.plano === 'basico') {
      valorBase = 80;
    } else if (this.plano === 'intermediario') {
      valorBase = 120;
    } else if (this.plano === 'premium') {
      valorBase = 180;
    }

    const meses = Number(this.periodo);

    if (this.personal) {
      valorBase += 100;
    }

    const total = valorBase * meses;

    alert(
      `Aluno: ${this.nomeAluno}
Plano: ${this.plano}
Período: ${meses} mês(es)
Personal: ${this.personal ? 'Sim' : 'Não'}
Total: R$ ${total.toFixed(2)}`,
    );
  }
}

import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FormsCamposBasico } from './forms-campos-basico/forms-campos-basico';
import { Exercicios } from './exercicios/exercicios';

export const routes: Routes = [
  { path: 'cidade/blumenau', loadComponent: () => CidadeBlumenau },
  { path: 'cidade/indaial', loadComponent: () => CidadeIndaial },
  { path: 'formulario/campos-basico', loadComponent: () => FormsCamposBasico },

  {
    path: 'exercicios',
    loadComponent: () => Exercicios,
    children: [
      {
        path: 'exercicio01-dados-pessoais',
        loadComponent: () =>
          import('./exercicios/exercicio01-dados-pessoais/exercicio01-dados-pessoais').then(
            (c) => c.Exercicio01DadosPessoais,
          ),
      },
      {
        path: 'exercicio02-calculo-media',
        loadComponent: () =>
          import('./exercicios/exercicio02-calculo-media/exercicio02-calculo-media').then(
            (c) => c.Exercicio02CalculoMedia,
          ),
      },
      {
        path: 'exercicio03-conversor-temperatura',
        loadComponent: () =>
          import('./exercicios/exercicio03-conversor-temperatura/exercicio03-conversor-temperatura').then(
            (c) => c.Exercicio03ConversorTemperatura,
          ),
      },
      {
        path: 'exercicio04-cadastro-produto',
        loadComponent: () =>
          import('./exercicios/exercicio04-cadastro-produto/exercicio04-cadastro-produto').then(
            (c) => c.Exercicio04CadastroProduto,
          ),
      },
      {
        path: 'exercicio05-imc',
        loadComponent: () =>
          import('./exercicios/exercicio05-imc/exercicio05-imc').then(
            (c) => c.Exercicio05Imc,
          ),
      },
      {
        path: 'exercicio06-pedido-pizzaria',
        loadComponent: () =>
          import('./exercicios/exercicio06-pedido-pizzaria/exercicio06-pedido-pizzaria').then(
            (c) => c.Exercicio06PedidoPizzaria,
          ),
      },
      {
        path: 'exercicio07-plano-academia',
        loadComponent: () =>
          import('./exercicios/exercicio07-plano-academia/exercicio07-plano-academia').then(
            (c) => c.Exercicio07PlanoAcademia,
          ),
      },
      {
        path: 'exercicio08-simulador-frete',
        loadComponent: () =>
          import('./exercicios/exercicio08-simulador-frete/exercicio08-simulador-frete').then(
            (c) => c.Exercicio08SimuladorFrete,
          ),
      },
      {
        path: 'exercicio09-cadastro-usuario',
        loadComponent: () =>
          import('./exercicios/exercicio09-cadastro-usuario/exercicio09-cadastro-usuario').then(
            (c) => c.Exercicio09CadastroUsuario,
          ),
      },
      {
        path: 'exercicio10-orcamento-viagem',
        loadComponent: () =>
          import('./exercicios/exercicio10-orcamento-viagem/exercicio10-orcamento-viagem').then(
            (c) => c.Exercicio10OrcamentoViagem,
          ),
      },
      {
        path: 'exercicio11-calculo-juros',
        loadComponent: () =>
          import('./exercicios/exercicio11-calculo-juros/exercicio11-calculo-juros').then(
            (c) => c.Exercicio11CalculoJuros,
          ),
      },
      {
        path: 'exercicio12-sistema-reserva',
        loadComponent: () =>
          import('./exercicios/exercicio12-sistema-reserva/exercicio12-sistema-reserva').then(
            (c) => c.Exercicio12SistemaReserva,
          ),
      },
      {
        path: 'exercicio13-calculo-energia',
        loadComponent: () =>
          import('./exercicios/exercicio13-calculo-energia/exercicio13-calculo-energia').then(
            (c) => c.Exercicio13CalculoEnergia,
          ),
      },
      {
        path: 'exercicio14-simulador-emprestimo',
        loadComponent: () =>
          import('./exercicios/exercicio14-simulador-emprestimo/exercicio14-simulador-emprestimo').then(
            (c) => c.Exercicio14SimuladorEmprestimo,
          ),
      },
      {
        path: 'exercicio15-calculo-area',
        loadComponent: () =>
          import('./exercicios/exercicio15-calculo-area/exercicio15-calculo-area').then(
            (c) => c.Exercicio15CalculoArea,
          ),
      },
      {
        path: '',
        redirectTo: 'exercicio01-dados-pessoais',
        pathMatch: 'full',
      },
    ],
  },
];

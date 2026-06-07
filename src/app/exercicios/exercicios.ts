import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-exercicios',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.scss',
})
export class Exercicios {}

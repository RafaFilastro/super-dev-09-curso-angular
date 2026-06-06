import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FormsCamposBasico } from './forms-campos-basico/forms-campos-basico';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent:() => CidadeBlumenau},
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial},
    { path: "formulario/campos-basico", loadComponent: () => FormsCamposBasico},
];

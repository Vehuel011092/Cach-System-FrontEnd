import { Component } from '@angular/core';
import { EscuelaParaNinos } from '../escuela-para-ninos/escuela-para-ninos'; // Ajusta la ruta
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})

export class LandingPage {
  constructor(private router: Router) { }

  irAEscuelaNinos() {
    // Aquí puedes agregar lógica adicional si es necesario
    this.router.navigate(['/escuela-para-ninos']);
  }

  irAEscuelaJovenes() {
    this.router.navigate(['/escuela-para-jovenes']);
  }

  irADepartamentoLenguas() {
    this.router.navigate(['/departamento-de-lenguas']);
  }


}

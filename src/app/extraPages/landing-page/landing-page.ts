import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navegacion } from './../../services/navegacion';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})

export class LandingPage {
  constructor(private router: Router, public navegacion: Navegacion) { }
  

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

   irAAdmisiones() {
    this.router.navigate(['/admisiones']);
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-admisiones',
  imports: [],
  templateUrl: './admisiones.html',
  styleUrl: './admisiones.scss',
})
export class Admisiones {
  enviarFormulario() {
    console.log('Formulario enviado');
  }
}

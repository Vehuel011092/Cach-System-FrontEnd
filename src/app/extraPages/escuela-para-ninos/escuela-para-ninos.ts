import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; // 👈 IMPORTA

@Component({
  selector: 'app-escuela-para-ninos',
  imports: [],
  templateUrl: './escuela-para-ninos.html',
  styleUrl: './escuela-para-ninos.scss',
})
export class EscuelaParaNinos {
  constructor(private viewportScroller: ViewportScroller) {} // 👈 INYECTA

  ngOnInit(): void {
    // Desplaza al inicio de la página
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}

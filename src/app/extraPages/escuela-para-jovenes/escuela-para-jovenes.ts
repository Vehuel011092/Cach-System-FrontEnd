import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; // 👈 IMPORTA

@Component({
  selector: 'app-escuela-para-jovenes',
  imports: [],
  templateUrl: './escuela-para-jovenes.html',
  styleUrl: './escuela-para-jovenes.scss',
})
export class EscuelaParaJovenes {  
  
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
}
